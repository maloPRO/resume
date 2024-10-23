import '../styles/personalInfo.css'

export default function PersonalInfo() {
    return (
        <div className='info'>
            <div className='top'>
                <p className='name'>John Doe</p>
            </div>
            <div className='details'>
                <p className='email'>johndoe@gmail.com</p>
                <p className='phone'>+254 792 112 112</p>
                <p className='nation'>Kenyan</p>
            </div>
        </div>
    )
}