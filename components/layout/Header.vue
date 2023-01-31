<template>
	<header class="header">
		<div class="header-wrap container">
			<div class="header-title">
				<NuxtLink href="/" class="header-title__link" >Kanjisho</NuxtLink>
			</div>
			<HeaderMenu 
				:items="menuItems"
			/>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',

	data() {
		return {
			menuItems: [
				{
					title: 'Home',
					link: '/',
				},
				{
					title: 'Kanji Grades List',
					link: '/kanjigrades/1/',
				},
				{
					title: 'Exam Lists',
					link: '/kanjilists/ap-1/',
				},
			]
		};
	},
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: $white;
  border-bottom: .1rem solid $gray-light;
  z-index: 100;

  &-wrap {
    display: flex;
    align-items: center;
	justify-content: space-between;
    height: $header-h;
    padding-top: 1.8rem;
    padding-bottom: 1.8rem;

    @include respond-to(mobile) {
    	height: $header-h-m;
		padding: 0 0 0 $mobile-padding;
    }
  }

  &-title {
	&__link {
		font-size: 2rem;
		font-weight: 700;
		line-height: 1;
		text-transform: uppercase;
	}
  }
}
</style>
