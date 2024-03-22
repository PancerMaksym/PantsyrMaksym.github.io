export default function Homepage(){
    return(
        <div className="HomePage">
            <div className="startPhotoInfo">
                <img className = "facePhoto" src={require('./photo/face.jpg')} alt="Pantsyr Maksym"/>
                <h1 className = "name">Pantsyr Maksym</h1>
            </div>

            <div className = "skill">
                <h2>Tech Stack</h2>
                <div className="skillTech">
                    <ul>
                        <li>C++</li>
                        <li>JS</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>React</li>
                    </ul>
                </div>

                <div className="databases">
                    <h2>Databases</h2>
                    <ul>
                        <li>
                            <b>SQL: </b> 
                            MS SQL Server
                        </li>
                        <li>
                            <b>NoSQL: </b>
                            MongoDB
                        </li>
                    </ul>
                </div>

                <div className="enviromentTool">
                    <h2>Environment & Tools</h2>
                    <ul>
                        <li>Windows</li>
                        <li>Linux</li>
                        <li>VS Code</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>

            <div className="projects">
                <h2>Projects</h2>
                <h2>there are no projects yet</h2>
            </div>

            <div className="certificates">
                <h2>Certificates</h2>
                <ul>
                    <li>CCNAv7: Introduction to Networks</li>
                    <li>DevNet Associate</li>
                    <li>DevNet Associate</li>
                    <li>NDG Linux</li>
                </ul>
            </div>

            <div className="languages">
                <h2>Languages</h2>
                <ul>
                    <li>
                        <b>Ukrainian - </b>
                        Native
                    </li>
                    <li>
                        <b>Russian - </b>
                        Native
                    </li>
                    <li>
                        <b>English - </b>
                        b2
                    </li>
                </ul>
            </div>

            <div className="studing">
                <h2>Studing</h2>

            </div>
        </div>
    )
}