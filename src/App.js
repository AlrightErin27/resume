import "./App.css";

function App() {
  return (
    <div className="resume">
      <div className="resume-top">
        <div className="name">Erin Van Brunt</div>
        <div className="title">Front End Software Engineer</div>
        <div className="local">
          Eugene, Oregon • (541) 543-4781 • erinmontybruce@gmail.com
        </div>
        <div className="links">
          linkedin.com/in/erin-van-brunt • github.com/AlrightErin27 •
          erinvanbrunt.vercel.app (Portfolio)
        </div>
      </div>
      <div className="resume-bottom">
        <div>
          <h3>Skills</h3>
          Javascript, Front End Design, HTML5, CSS3, Canvas, API, Bootstrap.js,
          Accessibility & Responsive Web Design, RESTful Routing, JSON, EJS,
          jQuery, Express, React, Axios, MongoDB, Sequelize, MERN Auth, Node.js,
          Next.js, Heroku, Netlify, Git, User Interface Design, Operational
          Analysis, Database Management, MacOS, Windows
        </div>

        <div>
          <h3>Projects</h3>
          <b>
            General Assembly | Q-tip & the Race to Sleep (Game) | Feb '21{" "}
          </b>{" "}
          <br />
          HTML, CSS, JavaScript, Canvas <br />• Implemented a technical parallax
          game in the web browser, that uses keyboard engagement. <br />•
          Designed & engineered the front-end in custom styling, DOM
          manipulation & Canvas for animation.
          <br />• Constructed interactive auditory clips using public mp3s for
          user experience.
          <br />
          <br />
          <b>
            General Assembly | Casterly Rock Municipal Website | March '21
          </b>{" "}
          <br />
          Foreign API, SQL, Sequelize, JavasScript, PostgresSQ, JSON, Web
          Tokens, CSS, Heroku <br />• This react application displays data
          pulled from A Song of Ice & Fire API. <br />• Implemented a local
          database on the server. <br />• Used JSON Web Tokens to authenticate
          users, & safely store their data.
          <br />
          <br />
          <b>General Assembly | Fortune Teller App | March '21</b>
          <br /> Github, MERNauth, Javascript Logic, CSS, JSON data-storage,
          Netlify, MongoDB
          <br />• Coordinated & controlled all Github merges & merge conflicts.
          This produced code that was highly legible for all 3 students in the
          project. <br />• Used scrum project management. Orchestrated product
          management, through agile software development & innovation, what the
          group members should focus on, & maintained efficiency.
          <br />
          • Executed a live website on Netlify that used MERNauth to protect
          users, a react app for the client / front-end & a mongo database that
          stored info in collections on the server / back-end. <br />• Using
          Javascript logic & a JSON file, we were able to randomly generate
          "wisdoms" for the user to read & save. Instituted engaging styling
          using css, keyframe animation & gifs.
          <br />
          <br />
          <b>General Assembly | Choose Your Own Adventure (Game) | April '21</b>
          <br />
          Javascript Logic, Canvas, React, React-router-dom, CSS
          <br />• Launched a game using Javascript logic, react-router-dom &
          react. Established data storage in useState. <br />• Formed a binary
          tree store all possible decisions, as well as current animated
          sprites.
          <br />• Designed a multi-platform product that has usability on
          smartphones/Android/IPhone/mobile platforms, tablets/IPad & all
          current browsers.
        </div>

        <div>
          <h3>Professional Experience</h3>
          <b>
            Restaurant Manager | 2014-2020 Alamo Draft-house, San Antonio, TX |
            Persephone, Aptos, CA | Mazzi's, Eugene, OR
          </b>
          <br />• Led the front of house team of 20 employees, practicing
          open-mindedness & teamwork in my leadership role. <br />• Responsible
          for training, organizing, supervising & evaluating staff, enabling
          them to maintain excellent customer experience & keep the restaurant
          running smoothly. <br />• Handled writing schedules, updating social
          media, completing weekly stocking product orders & staying up to date
          on book keeping, by strategic thinking, in order to insure the
          restaurant was in working order, correctly advertised & was
          financially successful. <br />
          • Hiring staff that had the correct certifications & knowledge of the
          competitive trade, bringing a level of professionalism, inspiration &
          dependability to the environment.
          <br />
          <br />{" "}
          <b>
            Mask Designer / Layout Engineer | 2011-2015 Analog Devices | San
            Jose, CA{" "}
          </b>
          <br />• Yielded analog & digital mask designs for integrated circuits
          in mobile phones. <br />• Being very passion filled & detail oriented,
          I worked closely with employees from all departments to insure we came
          out with the best product. <br />• Creating &/ or refining, a high
          quality product that brought costs down, ran functionally & ensured
          the math, product & layouts were dry & concise. <br />• Learned
          critical thinking, attention to detail, adaptability, a string work
          ethic, effective communication & organization. <br />• Ability to
          develop and iterate on ideas/concepts through creativity in problem
          solving and the ability to think outside of established solutions.
        </div>

        <div>
          <h3>Education</h3>
          <b>General Assembly, SEA, WA: Software Engineering Immersive 2021:</b>
          <br />
          Full-stack software engineering immersive student in an intensive,
          twelve-week, 450+ hour program focused on product development
          fundamentals, object-oriented programming, MVC frameworks, data
          modeling, & team collaboration strategies. Developed a portfolio of
          individual & group projects. <br />
          <b>Silicon Design Institute, Santa Clara, CA: Mask Design</b>
          <br /> <b>2011-2013 PCC, Portland, OR: Art / Math Major</b>
          <br />{" "}
          <b>
            2009-2011 Cabrillo College, Aptos, CA : Art History Major 2007-2009
          </b>
        </div>
      </div>
    </div>
  );
}

export default App;
