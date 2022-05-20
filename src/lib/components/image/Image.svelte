<script>
    import { LazyImage } from '$components/index'
    export let src;
    export let alt;
</script>

<LazyImage
class="post-image relative w-3/5 <md:(my-5 w-full) my-10 rounded-md dark:opacity-90"
offset={100}
fadeOption={{ delay: 1000, duration: 1000 }}
>
    <img class="rounded-md" {src} {alt} />
    <div class="hidden" />
</LazyImage>

<style lang="scss">
.post-image {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
</style>