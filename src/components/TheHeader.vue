<script setup>

</script>

<template>
			<!-- Header -->
				<section id="header">

					<!-- Logo -->
						<h1>AmiiVue</h1>

					<!-- Nav -->
						<nav id="nav">
							<ul>
								<li class="current"><RouterLink :to="{name:'home'}">Home</RouterLink></li>
								<li><RouterLink :to="{name:'list'}">Liste Amiibo</RouterLink></li>
							</ul>
						</nav>
				</section>

</template>

<style scoped>
section{
    margin-bottom: 0;
    padding-bottom: 2.5em !important;
    border-bottom: solid 1px #ccc;
}
/* Header */

	#header {
		position: relative;
		background: #ffffff;
		padding: 5em 0 .2em 0;
		text-align: center;
	}

		#header h1 {
			color: #252122;
			font-weight: 900;
			font-size: 2.5em;
			letter-spacing: -0.035em;
			line-height: 1;
		}

/* Nav */

	#nav {
		margin: 2.5em 0 0 0;
	}

		#nav > ul {
			margin: 0;
		}

			#nav > ul > li {
				display: inline-block;
				font-style: italic;
				margin: 0 0.35em 0 0.35em;
			}

				#nav > ul > li > ul {
					display: none;
				}

				#nav > ul > li > a {
					border-radius: 5px;
					color: #5d5d5d;
					text-decoration: none;
					padding: 0.6em 1.2em 0.6em 1.2em;
					-moz-transition: background-color .25s ease-in-out;
					-webkit-transition: background-color .25s ease-in-out;
					-ms-transition: background-color .25s ease-in-out;
					transition: background-color .25s ease-in-out;
					outline: 0;
				}

				#nav > ul > li:hover > a, #nav > ul > li.active > a {
					background: #f3f3f3;
				}

				#nav > ul > li.current > a {
					background: #d52349;
					color: #fff !important;
					font-weight: 700;
				}

	.dropotron {
		border-radius: 5px;
		background-color: #252122;
		background-color: rgba(34, 30, 31, 0.98);
		padding: 1.25em 1.5em 1.25em 1.5em;
		font-style: italic;
		min-width: 13em;
		box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.5);
		text-align: left;
		margin-top: -1.25em;
		margin-left: -1px;
		list-style: none;
	}

		.dropotron a, .dropotron span {
			color: #aaa;
			text-decoration: none;
			-moz-transition: color .25s ease-in-out;
			-webkit-transition: color .25s ease-in-out;
			-ms-transition: color .25s ease-in-out;
			transition: color .25s ease-in-out;
		}

		.dropotron li {
			padding: 0.25em 0 0.25em 0;
		}

			.dropotron li:hover > a, .dropotron li:hover > span {
				color: #fff;
			}

		.dropotron.level-0 {
			margin-top: 2em;
		}

			.dropotron.level-0:before {
				content: '';
				display: block;
				position: absolute;
				left: 50%;
				margin-left: -10px;
				top: -9px;
				border-left: solid 10px transparent;
				border-right: solid 10px transparent;
				border-bottom: solid 10px #252122;
				border-bottom-color: rgba(34, 30, 31, 0.98);
			}
</style>