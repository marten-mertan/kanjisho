<template>
	<header class="header">
		<div class="header-wrap container">
			<div class="header-title">
				<NuxtLink href="/" class="header-title__link" >Kanjisho</NuxtLink>
			</div>
			<nav class="header-menu">
				<ul class="header-menu-list">
					<li class="header-menu-list-item">
						<NuxtLink href="/" class="header-menu-list-item__link" >Home</NuxtLink>
					</li>
					<li class="header-menu-list-item">
						<NuxtLink href="/kanji/1/" class="header-menu-list-item__link" >Kanji</NuxtLink>
					</li>
					<li class="header-menu-list-item">
						<NuxtLink href="/kanjilists/ap-1/" class="header-menu-list-item__link" >Exam Lists</NuxtLink>
					</li>
					<li class="header-menu-list-item">
						<NuxtLink href="/profile/" class="header-menu-list-item__link" >Profile</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
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
	flex-wrap: wrap;
    height: $header-h;
    padding-top: 1.8rem;
    padding-bottom: 1.8rem;

    @include respond-to(mobile) {
      height: $header-h-m;
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

  &-menu {
	margin-left: 2rem;

	&-list {
		display: flex;

		&-item {

			&__link {
				font-size: 1.2rem;
				font-weight: 600;
				padding: 1rem;
				text-transform: uppercase;
				transition: color .22s ease;

				&:hover {
					color: $pink;
				}
			}
		}
	}
  }
}
</style>
