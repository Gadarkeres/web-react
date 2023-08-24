import Styles from "./About.Module.css";
import PhotoC from './casal.png'

const About = () => {
  return (
    <div className="about_background">
      <div className="container_texts">
        <div className="texts"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias non laboriosam reiciendis ipsum accusantium exercitationem doloremque et quam quaerat ab, voluptas at maiores accusamus fuga illo aspernatur optio. Ut</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore qui accusantium cumque, voluptatum, omnis magnam soluta quae, similique aspernatur deserunt accusamus. Commodi repudiandae optio soluta non doloremque voluptate, pariatur maxime!</p>
        .</div>
        <div className="texts"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque officia dolor odio corrupti voluptatibus, cupiditate ex at neque molestiae inventore. Dolorem voluptatibus perferendis vel a! Cupiditate quisquam nemo impedit saepe.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, dolor! Nihil ipsum enim explicabo nisi, quidem maxime, ex culpa officia, iusto obcaecati eaque neque dolores dolorum qui. Sapiente, ipsum quis!</p>
        </div>
      </div>
      <div className="container_photo"> 
        <div className="photo">
          <img className="PhotoC" src={PhotoC} alt="Foto de um Casamento" />
        </div>
      </div>
    </div>
  )
}

export default About