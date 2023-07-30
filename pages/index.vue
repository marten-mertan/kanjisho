<template>
	<div class="index page container">
		<div class="content">

			<div class="intro">
				<div class="intro-content">
					<div class="intro__title">
						What is KANJISHO?
					</div>
					<div class="intro__text">
						<p>Kanjisho helps to improve your knowledge of Japanese characters (kanji). This project presents the most used kanji and includes tests.</p> 
						<p>All kanji are divided by grades according to the Advanced Placement Exam and Macquarie University Dictionary.</p>
						<p>Kanjisho is a personal portfolio project. It is absolutely free and has no commercial benefit.</p>
					</div>
				</div>
				<div class="intro-img-right">
					
				</div>
			</div>
			<div class="intro">
				<div class="intro-img-left">
					
				</div>
				<div class="intro-content">
					<div class="intro__title">
						Links and contacts
					</div>
					<div class="intro__text">
						<p>All illustrations are created by <a class="link" href="https://twitter.com/Kukie_nyan" target="_blank">@Kukie_nyan</a></p>
						<p>If you find a bug or have a feature suggestion, please contact me via:</p>
						<ul>
							<li>github: <a class="link" href="https://github.com/marten-mertan" target="_blank">marten-mertan</a> </li>
							<li>twitter: <a class="link" href="https://twitter.com/Marten_Mertan" target="_blank">@Marten_Mertan</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.index.page {
	padding-bottom: 0;
}

.intro {
	display: flex;

	@include respond-to(mobile) {
		flex-direction: column;
	}

	&:not(:first-child) {
		margin-top: 5rem;
	}

	&__title {
		font-size: 2rem;
		font-weight: 700;
		line-height: 1;
		text-transform: uppercase;
	}

	&-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	&__text {
		flex: 0 1 auto;

		p {
			font-size: 2rem;
			margin-top: 1.5rem;

			@include respond-to(tablet) {
				font-size: 1.6rem;
			}

			&:first-child {
				margin-top: 5rem;

				@include respond-to(tablet) {
					margin-top: 2.2rem;
				}
			}
		}

		ul {
			margin-top: 1.5rem;

			li {
				padding-left: 1.2rem;
				font-size: 2rem;
    			line-height: 1.5;

				@include respond-to(tablet) {
					font-size: 1.6rem;
				}

				&:before {
					content: '— ';
				}
			}
		}
	}

	&-img-right {
		flex: 0 0 auto;
    	align-self: flex-end;
		width: 50rem;
		height: 40rem;
		background: url('/img/fubuki1.jpg') right bottom no-repeat;
  		background-size: contain;
		margin-left: 3rem;
		border-bottom: .1rem solid $gray-light;

		@include respond-to(tablet) {
			width: 25rem;
			height: 25rem;
		}

		@include respond-to(mobile) {
			order: 2;
		}
	}

	&-img-left {
		flex: 0 0 auto;
    	align-self: flex-end;
		width: 50rem;
		height: 40rem;
		background: url('/img/fubuki2.jpg') left bottom no-repeat;
		background-size: contain;
		margin-right: 3rem;

		@include respond-to(tablet) {
			width: 25rem;
			height: 25rem;
		}

		@include respond-to(mobile) {
			order: 2;
    		align-self: flex-start;
		}
	}
}

</style>
