<script lang="ts">
    import {Tipex} from "@friendofsvelte/tipex";
    import "@friendofsvelte/tipex/styles/Tipex.css";
    import "@friendofsvelte/tipex/styles/ProseMirror.css";
    import "@friendofsvelte/tipex/styles/Controls.css";
    import "@friendofsvelte/tipex/styles/EditLink.css";
    import "@friendofsvelte/tipex/styles/CodeBlock.css";
    export let htmlContent = `<p>Where is your imagination leading you?</p>`;
</script>

<div class="page">
    <div class="container">
        <Tipex {htmlContent}
        displayDefaultControls
        floatingMenu
        style="margin-bottom: 0;width:100%;;" 
        className="h-[70vh] border border-neutral-200"/>    
    </div>
</div>

<style>
    .page {
        margin-top: 1rem;
        border: 0px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 0px solid green;
    }

</style>