<script>
	import Nav from '../components/nav.svelte';

	export let segment;
	console.log(segment);
</script>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<style global lang="less">
  @import "../less/style";
</style>
