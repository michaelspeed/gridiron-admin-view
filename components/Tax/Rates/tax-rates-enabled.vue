<template>
    <div>
        <a-tag color="#87d068" v-if="params.data.enabled">Enabled</a-tag>
        <a-tag color="#f50" v-if="!params.data.enabled">Disabled</a-tag>
    </div>
</template>

<script lang="ts">
    export default {

    }
</script>
