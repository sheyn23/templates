<template>
    <div class="note">
        <input class="note__input" type="text">
        <span class="note__btn">Add</span>
    </div>
</template>

<script>
export default {
    name: "Note",
    // props: {
    //     data: {
    //         type: Object,
    //     },
    // },
    methods: {

    }
}
</script>

<style scope lang="sass">
.note 
    display: flex
    flex-direction: column
    align-items: center
    
    .note__input
            width: 20px
            height: 20px
            border: 1px solid black
            border-radius: 5px
            padding: 0 5px
            text-align: center

            &:focus
                border-color: #AED4E6

    .note__btn
        padding: 6px 10px
        background: #AED4E6
        border: 1px solid #AED4E6
        border-radius: 5px
        margin: 20px auto
        color: #FFFFFF
        margin: 6px 0 0 0

        &:hover
            cursor: pointer
            background: white
            color: #AED4E6
</style>