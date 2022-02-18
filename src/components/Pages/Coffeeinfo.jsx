import React from "react";
import InfoImg1 from "../assets/InfoImg1.jpg";
import InfoImg2 from "../assets/InfoImg2.jpg";
import InfoImg3 from "../assets/InfoImg3.jpg";

function Coffeeinfo(props) {
	const name = props.pagename.split("/")[2];
	const type = props.pagename.split("/")[3];

	return (
		<div className="coffee-info">
			<div className="container">
				<div className="info-sheet">
					<div className="headers">
						<div className="head">
							<h1>{name}</h1>
							<div className="line"></div>
							<h2>{type}</h2>
						</div>
					</div>
					<div className="sheet">
						<div className="info" id="info1">
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
								quos et nisi quibusdam saepe aliquam, illo praesentium cum
								repellendus voluptatem aut vitae repellat provident. Dolorem
								quasi deleniti sed. Molestias, doloribus? Obcaecati modi culpa
								sint. Eligendi veniam vel voluptates adipisci laudantium quasi
								deleniti vero illum distinctio placeat? Nobis laboriosam
								deserunt in.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
								quos et nisi quibusdam saepe aliquam, illo praesentium cum
								repellendus voluptatem aut vitae repellat provident. Dolorem
								quasi deleniti sed. Molestias, doloribus? Obcaecati modi culpa
								sint.
							</p>
						</div>
						<div className="img">
							<img src={InfoImg1} alt="" />
						</div>
						<div className="info" id="info2">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Incidunt, beatae commodi. Cupiditate mollitia, laudantium
								tempore incidunt perspiciatis consequatur quaerat illum, iste,
								dolorem fugit corporis illo ullam dolores facere! Temporibus
								animi dolores perferendis beatae alias architecto culpa
								reprehenderit quod non commodi unde cupiditate impedit possimus
								laboriosam, in ad nulla earum voluptatum consequatur. Porro rem
								explicabo velit, possimus perspiciatis aperiam nulla
								accusantium, cupiditate repellat expedita earum neque voluptate
								minus incidunt voluptates, temporibus quas doloremque corrupti
								provident consequatur facilis tenetur! Ut, a laboriosam.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Officia, iure. Impedit nesciunt, perspiciatis unde obcaecati
								culpa accusamus deserunt error odio modi, quisquam atque! Fuga
								optio doloribus enim delectus eaque dolores voluptatem sapiente,
								pariatur quae, iure rerum sed quisquam nesciunt error?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, a.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Exercitationem iusto, consequuntur architecto minima nulla
								dolor! Cumque mollitia ad non a architecto, saepe repellendus
								voluptatum. Aut debitis illum pariatur voluptas numquam esse
								architecto veritatis placeat ut est nemo ducimus necessitatibus
								mollitia cupiditate, qui vel. Aspernatur ea maxime fuga neque
								aliquam harum non, minus fugit illo architecto dolor, magni
								repellendus ex nihil? Quibusdam reiciendis doloribus aperiam
								fugit dolores quia rem eaque architecto, natus modi praesentium
								error? Aspernatur, consectetur? Ratione soluta expedita sunt
								sequi, eos sed magnam consectetur consequuntur at. Quibusdam
								adipisci facere rem temporibus eligendi vitae ea deserunt
								sapiente quia officia. Totam odit distinctio, fugit
								perspiciatis, vel recusandae molestias nesciunt est voluptate
								asperiores iusto? Dolorem magni modi illum aspernatur incidunt
								assumenda saepe deserunt! Repellendus nemo accusamus inventore
								unde quisquam dolorum? Sunt eligendi repellendus blanditiis
								pariatur veritatis officia doloremque qui soluta fuga obcaecati!
							</p>
						</div>
						<div className="info" id="info3">
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
								unde similique doloribus praesentium odit nobis corporis
								numquam! Aspernatur dolorum voluptatibus beatae magnam aliquam
								obcaecati ducimus totam quae quaerat distinctio. Laudantium
								voluptatum voluptatibus cum quibusdam itaque ad maiores soluta
								iusto beatae ducimus aspernatur accusantium officia ex velit
								necessitatibus architecto tenetur quam, iure quo aut saepe rerum
								obcaecati. Itaque laudantium aut eveniet distinctio. Quod
								eligendi alias est. Nostrum sequi corrupti voluptates! Alias
								ipsa eaque fugit libero magnam quisquam dolorum molestias atque
								explicabo.
							</p>
						</div>
						<div className="img">
							<img src={InfoImg2} alt="" />
						</div>
						<div className="info" id="info4">
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
								unde nihil? Provident quia tempore, consectetur qui laborum
								deserunt eum, harum cum veritatis minus fuga enim eius natus
								architecto id voluptas eos quae error optio incidunt blanditiis
								aut. Porro nobis quidem in nesciunt at sint vitae odio
								inventore, illo id suscipit quaerat, atque velit, ipsam nemo
								incidunt reiciendis. Doloribus ad sed esse voluptatibus
								laboriosam alias magnam? Cumque sint ad veniam eos saepe omnis
								nesciunt quae. Voluptatem sunt repudiandae accusamus harum,
								beatae corporis aperiam iusto dolorem, quis voluptatum explicabo
								doloremque ab quisquam velit unde non architecto quidem
								cupiditate voluptas sit? Dicta iure officiis, vero accusantium
								deserunt, omnis reiciendis debitis quos ea adipisci rem
								cupiditate vitae, eaque praesentium veniam minus quisquam
								veritatis ab labore. Doloremque reiciendis eius temporibus
								atque, deleniti consectetur doloribus nobis iste mollitia.
								Repudiandae expedita vitae aut fugit qui itaque optio
								voluptatibus eaque consequatur adipisci blanditiis officiis
								molestias aperiam quibusdam quisquam obcaecati, quis mollitia.
								Laboriosam et a corporis in velit esse expedita corrupti
								temporibus quis, quod pariatur autem? Aspernatur asperiores
								reprehenderit aut et vitae labore? Officiis in molestiae,
								tempore minima velit vel libero deleniti illo minus labore
								veniam illum! Fuga, non dignissimos. Consequatur hic alias
								aliquam cupiditate. A, blanditiis molestias atque dolore unde
								nemo corrupti corporis quisquam odio veritatis qui, iusto minus
								accusantium maxime, vero illo quasi eveniet deserunt beatae.
								Necessitatibus magnam eos non tempore repellendus, officiis
								aliquid placeat voluptate. Repellendus asperiores dolore ab.
								Corrupti, laborum expedita quis id ipsum illum sunt veritatis
								qui atque? Pariatur sapiente velit ut unde est, recusandae ipsam
								ullam!
							</p>
						</div>
						<div className="info" id="info5">
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Debitis est sunt maxime ut molestiae. Optio perspiciatis rem
								dolore, neque similique dolor assumenda nemo architecto quia ea
								veritatis consequatur dolorem quidem. Lorem ipsum dolor, sit
								amet consectetur adipisicing elit. Temporibus veniam modi
								distinctio aliquid quam odio doloribus possimus magnam est
								assumenda doloremque, laudantium quidem rerum unde soluta
								excepturi, qui fugit et? Nulla inventore nobis soluta in ea
								beatae quidem minus iusto sint sapiente, perspiciatis aspernatur
								placeat dolorem ipsa? Eius at porro corporis nisi voluptatem
								molestias ducimus cumque officiis optio eligendi consequatur
								illo mollitia dolor natus recusandae voluptatibus explicabo rem,
								cupiditate molestiae, magni ratione autem iste nulla quasi?
								Tenetur dicta, nemo excepturi odit asperiores voluptatem dolor
								qui magni, ut sunt vero mollitia.
							</p>
						</div>
						<div className="img">
							<img src={InfoImg3} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Coffeeinfo;
