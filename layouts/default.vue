<template>
	<div>
		<LayoutHeader />

		<main class="main">
			<slot />
		</main>

		<LayoutFooter />
	</div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: $header-h;
  flex-grow: 1;

  @include respond-to(mobile) {
    padding-top: $header-h-m;
  }
}
</style>
