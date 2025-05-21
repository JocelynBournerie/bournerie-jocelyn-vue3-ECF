<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
<div id="page-wrapper">
						<!-- Banner -->
						<section id="banner">
							<div>
                                <header>
                                    <h2>Hey.Bienvenue sur ma collection</h2>
                                </header>
                            </div>
						</section>
				<!-- Intro -->
				<!-- ici vous pouvez choisir 3 amiibos au hasard ou juste vos trois préférés -->
				<section id="intro" class="container">
					<div class="row">
						<div class="col-4 col-12-medium">
							<section class="middle">
								<img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png" />
								<header>
									<h2>character</h2>
								</header>
								<p>gameSeries</p>
							</section>
						</div>
						<div class="col-4 col-12-medium">
							<section class="middle">
								<img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png" />
								<header>
									<h2>character</h2>
								</header>
								<p>gameSeries</p>
							</section>
						</div>
						<div class="col-4 col-12-medium">
							<section class="middle">
								<img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png" />
								<header>
									<h2>character</h2>
								</header>
								<p>gameSeries</p>
							</section>
						</div>
					</div>
					<footer>
						<ul class="actions">
							<li><RouterLink :to="{name:'list'}" class="button large">Liste complète</RouterLink></li>
						</ul>
					</footer>
				</section>

			

		</div>
</template>

<style scoped>
/* Banner */

	#banner {
			
        border-bottom: solid 1px #ccc;
		padding-bottom: 4em ;
        >div{
            background: #474b4c url("../../images/banner.png");
		background-position: center;
		background-size: auto 100%;
		background-repeat: no-repeat;
		text-align: center;
		position: relative;
		padding: 8em 0;	
        }
        
	}

		#banner header {
			background-color: rgba(34, 30, 31, 0.98);
			display: inline-block;
			padding: 2.5em 5em;
			border-radius: 5px;
		}

			#banner header h2 {
				color: #fff;
				font-weight: 700;
				font-size: 2.5em;
				margin: 0 0 0.65em 0;
			}

			#banner header p {
				color: #d52349;
				padding: 0;
				font-style: normal;
				margin: 0;
				font-size: 1.5em;
			}

</style>