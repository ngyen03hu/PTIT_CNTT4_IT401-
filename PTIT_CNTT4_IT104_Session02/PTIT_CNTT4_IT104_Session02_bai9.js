
function getStudentSummary(student) {
    const subjects = student.listMonHoc;
    const total = subjects.reduce((sum, subj) => sum + subj.score, 0);
    const average = +(total / subjects.length).toFixed(2);

    let rank = "";
    if (average >= 8.5) rank = "Học sinh giỏi";
    else if (average >= 7) rank = "Học sinh khá";
    else if (average >= 5) rank = "Học sinh trung bình";
    else rank = "Học sinh yếu";

    const bestSubject = subjects.reduce((best, subj) => subj.score > best.score ? subj : best);
    const worstSubject = subjects.reduce((worst, subj) => subj.score < worst.score ? subj : worst);

    return `${student.name} có điểm trung bình ${average}, xếp loại ${rank}. Môn học tốt nhất là ${bestSubject.subject}, môn học kém nhất là ${worstSubject.subject}.`;
}


const student = {
    name: "Dev",
    age: 20,

    listMonHoc: [
        { subject: "Math", score: 9 },
        { subject: "English", score: 7.5 },
        { subject: "physics", score: 8 },
        { subject: "Literature", score: 6.5 }
    ]
};

console.log(getStudentSummary(student));
