import React from "react";
import { useContext } from "react";
import Context from "../../context/Context";

function About() {
	const { hideInfo } = useContext(Context);

	return (
		<div className="about-container" onWheel={hideInfo}>
			<div className="about-bg"></div>
			<div className="container">
				<div className="about-content">
					<div className="aboutdashline"></div>
					<div className="content">
						<h1>ABOUT US</h1>
						<h2>Lorem, ipsum.</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
							assumenda, sunt error laboriosam ea maiores ad. Unde error quam
							fugit nam eveniet quisquam, eius praesentium possimus facilis
							amet. Sed et aliquid, tempora minima dolorem assumenda saepe totam
							praesentium repellendus maxime eum eveniet hic nostrum odio minus.
							Harum unde, sapiente impedit nihil, recusandae consequuntur modi
							quia fuga earum doloremque nesciunt. Numquam facere suscipit optio
							maxime iusto, dolorum dolores ipsam accusantium totam corrupti
							odit, doloremque quaerat impedit distinctio aliquid? Omnis qui
							incidunt minus, beatae tempore accusantium nostrum deserunt
							maiores in iste veniam architecto asperiores nihil, soluta dolor?
							Unde eaque dolores quasi officia doloribus dolorem et id quo ipsum
							voluptatem tenetur ut harum ullam fuga accusamus nostrum nemo
							placeat, error consectetur inventore quisquam?
						</p>
						<h2>Lorem, ipsum.</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
							eius, ullam culpa quis beatae deleniti fuga qui itaque ipsa ipsam
							distinctio laudantium quisquam. Consectetur nihil, reiciendis nisi
							quae pariatur asperiores?
						</p>
						<h2>Lorem, ipsum.</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
							mollitia odit natus, vel quia hic blanditiis, numquam, eaque
							molestias omnis ad deserunt consequatur exercitationem laborum
							earum? Voluptatem illum libero fugiat recusandae dolorem
							laboriosam neque voluptates, aut maiores, doloribus, consectetur
							incidunt ipsa est magni autem quaerat? Laborum esse magnam et
							dolorem nulla molestiae veritatis quasi aut consequatur cum
							expedita, fugit harum, placeat fugiat totam! Quidem, sapiente
							excepturi. Similique aut quia quidem odio sint, veniam voluptates
							iusto! Voluptatum reiciendis quos, molestias dolorem facere
							consectetur autem ut placeat voluptatibus, eligendi culpa labore
							asperiores libero qui cupiditate minima porro nobis numquam esse
							laudantium, totam fugiat natus! Animi expedita ipsam dolore
							provident doloribus fuga, aut, ad ratione, quo tempora tenetur
							unde assumenda pariatur esse facere hic blanditiis at
							consequuntur! Vitae ullam temporibus, excepturi error accusantium
							non at dignissimos natus quisquam eum, soluta cum eaque fugit
							facere? Fugiat inventore dolores aperiam laudantium error culpa,
							doloribus reiciendis veritatis dolor placeat tenetur explicabo,
							quos incidunt. Nihil corrupti alias repellendus amet ullam?
							Quidem, inventore cupiditate aspernatur corporis ipsa sed? Fugiat
							ducimus, atque blanditiis laborum totam exercitationem ipsa aut
							sunt provident aperiam perferendis aliquid consequatur, facilis
							fuga expedita molestiae delectus in eligendi. Magni vitae
							necessitatibus assumenda odit, aliquam eaque minus nisi quos
							doloremque?
						</p>
						<h2>Lorem, ipsum.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
							labore dolorum beatae quasi sequi, maxime, qui culpa facilis
							perspiciatis iste quis nisi, omnis possimus inventore quos
							exercitationem aperiam autem? Accusantium natus hic sunt, quidem
							aut explicabo optio enim est nisi rerum commodi ullam incidunt
							illo provident, magnam soluta ipsam mollitia, cupiditate id
							excepturi iure molestiae esse quas? Earum quaerat labore, dolorem
							architecto eius aliquam tempore accusantium dolorum quas veniam
							aut quibusdam ea laboriosam expedita officia reprehenderit
							molestiae odit molestias! Quae ad deserunt, beatae quo quasi
							repellendus perferendis cupiditate velit. Voluptate perferendis
							eveniet, vero repellendus unde cum sint ab amet veniam nisi. Atque
							a repellat recusandae consequuntur, laboriosam omnis quos id
							eligendi quibusdam eos eveniet odit quas similique molestiae
							exercitationem, distinctio saepe magnam temporibus! Magni
							voluptate sapiente quod molestias exercitationem dignissimos
							voluptatem illo nemo eaque autem aliquam alias, ratione, quas
							corrupti porro dicta qui ipsam, consequuntur officia fugit ab.
							Cumque dolorem dolorum dicta tenetur expedita doloribus nulla eos
							molestiae aliquid est accusamus, commodi autem quis totam vitae
							inventore. Molestias laborum delectus vel praesentium in
							perspiciatis. Nam ex atque adipisci. Repellat dignissimos ratione
							labore et, ex officiis officia ullam aspernatur tempore
							repellendus aliquam, cupiditate veritatis. In et, ipsam unde
							aperiam impedit at!
						</p>
					</div>
				</div>
			</div>
			<div className="owners">
				<div className="owner">
					<div className="avatar">
						<div className="img-owner" id="johnDoe"></div>
						<p>John Doe</p>
					</div>
					<div className="brief">
						<p>
							Hello, I'm John. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Id repellat minima hic distinctio, vero
							delectus?
						</p>
					</div>
				</div>
				<div className="owner">
					<div className="avatar">
						<div className="img-owner" id="janeDoe"></div>
						<p>Jane Doe</p>
					</div>
					<div className="brief">
						<p>
							Hi, My name is Jane. Lorem ipsum dolor, sit amet consectetur
							adipisicing elit. Accusamus voluptatibus veniam sint nulla
							reprehenderit vitae sed fugit accusantium sequi nesciunt.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
