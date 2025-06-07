import React from 'react'

const AboutMe = () => {
    return (
        <>
            <div id='resume'>
                <h1>Praveenkumar Subramani</h1>
                <p onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=praveenkumarsubramani21@gmail.com")}>📧 praveenkumarsubramani21@gmail.com</p>
                <p onClick={() => window.open("tel:+917092997287")}>📞 +91 70929 97287</p>

                <div className="section">
                    <h2>Career Objective</h2>
                    <p>
                        Motivated and detail-oriented Computer Science graduate with foundational knowledge in both front-end and back-end development.
                        Familiar with software development and quality assurance concepts. Eager to contribute to development and automation testing
                        processes while enhancing skills through real-world experience.
                    </p>
                </div>

                <div className="section">
                    <h2>Academic Qualifications</h2>
                    <ul>
                        <li>B.Sc. Computer Science | AVS College of Arts & Science, Salem | 2023 | 72%</li>
                        <li>SSLC (10th) | Govt. Boys Hr. Sec. School, Mecheri | 2018 | 72%</li>
                        <li>HSC (12th) | Govt. Boys Hr. Sec. School, Mecheri | 2020 | 57%</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Technical Skills</h2>
                    <ul>
                        <li><strong>Programming:</strong> Core Java (OOPs, Collections)</li>
                        <li><strong>Back-End:</strong> Spring, Spring Boot</li>
                        <li><strong>Front-End:</strong> React, JavaScript, HTML5</li>
                        <li><strong>Testing:</strong> Selenium (Automation Testing)</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Certifications & Training</h2>
                    <ul>
                        <li>Completed 6-month training in Automation Testing at Greens Technology, Chennai</li>
                        <li>Learned Spring & Spring Boot from YouTube - CONQUER VICTORY</li>
                        <li>Learned JavaScript & React from YouTube - UNIQ Technologies</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Projects</h2>
                    <ul>
                        <li><strong>E-Commerce Website</strong><br />
                            Technologies: React, JavaScript, Spring Boot<br />
                            Developed a dynamic product management system with full CRUD functionality.
                        </li>
                        <li><strong>Todo App</strong><br />
                            Technologies: React, JavaScript<br />
                            Built a functional to-do list application for managing daily tasks.
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Personal Details</h2>
                    <ul>
                        <li><strong>Full Name:</strong> Praveenkumar Subramani</li>
                        <li><strong>D.O.B:</strong> 21-04-2003</li>
                        <li><strong>Address:</strong> D.No. 112, Poosarivalavu, Amaram, Mettur, Salem, Tamilnadu – 636451</li>
                    </ul>
                </div>

                <div className="section">
                    <h2>Declaration</h2>
                    <p >
                        I hereby declare that the information provided above is true to the best of my knowledge.
                    </p>
                </div>
            </div>

        </>
    )
}

export default AboutMe