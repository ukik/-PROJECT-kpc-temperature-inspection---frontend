<template>
    <fragment>
        <q-item @click="$emit('onBubble', payload.value)" clickable v-close-popup>
            <q-item-section avatar>
            <slot name="avatar">
                <q-avatar icon="library_add" color="primary" text-color="white" />
            </slot>            
            </q-item-section>
            <q-item-section>
            <q-item-label>{{ payload.label }}</q-item-label>
            <slot name="item-label">
                <q-item-label caption>inspeksi ulang</q-item-label>
            </slot>
            </q-item-section>
            <!-- <q-item-section side>
                <q-icon name="info" color="amber" />
            </q-item-section> -->
        </q-item>      
    </fragment>
</template>

<script>

export default {
    props: ['payload']
}

</script>