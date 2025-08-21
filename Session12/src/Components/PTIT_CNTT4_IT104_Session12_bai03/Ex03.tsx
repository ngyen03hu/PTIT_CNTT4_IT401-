import React from 'react'
interface Umse {
    name: string,
    gt: string,
    Ns: string,
    Eami: string,
    DiaChi: string;

}

export default function Ex03() {
    render(){
        const umse: Umse = [
            {
                name: "Nguyen van A",
                gt: "nam",
                Ns: "06/03/2024",
                Eamil: "nva@gmail.com",
                DiaChi: "Thanh Xuan , HA noi"
            }
        ]
        return (
            <div className='heard'>
                <h2>Thong tin ca nhan </h2>
                <ul>
                    <li>
                        HO va ten : <strong >{umse.name}</strong>
                    </li>
                    <li>
                        Gioi tinh : <strong>{umse.gt}</strong>
                    </li>
                    <li>
                        Ngay sinh : <strong>{umse.Ns}</strong>
                    </li>
                    <li>
                        Email:<strong>{umse.Eami}</strong>
                    </li>
                    <li>
                        Dia chi : <strong>{umse.DiaChi}</strong>
                    </li>
                </ul>
            </div>

        )
    }
}
