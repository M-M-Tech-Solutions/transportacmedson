<template>
    <DynamicTable :columns="columns" :items="items" :enableTooltip="true">
        <template #actions="{ row }">
            <DropDownActions :is-excluir="true" @detalhar="console.log('teste')" />
        </template>
    </DynamicTable>


</template>
<script setup lang="ts">

import { DynamicTable } from '@/components/ui/table'
import type { Column } from '@/components/ui/table'
import DropDownActions from '@/components/ui/dropdown-menu/DropDownActions.vue';
import { ref } from 'vue';


const columns = ref<Column[]>([
    {
        key: "placa",
        label: "Placa",
        width: "20rem",
        maxWidth: "60rem"
    },
    {
        key: "modelo",
        label: "Modelo"
    },
    {
        key: "dtValTacografo",
        label: "Data Venc. Tacografo"
    },
    {
        key: "kilometragem",
        label: "Kilometragem"
    },
    { key: 'actions', label: 'Ações', width: '80px' }
])

const items = ref([
    {
        id: 1,
        placa: "hbz-1235dsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfdddddddddddddddddgggggggggggggdddddddddddddddssssssssssssssssssssssssssssssssssssssssss",
        modelo: "Scania 124 Bicudo",
        dtValTacografo: "21/08/2026",
        kilometragem: "180.000.000",
    },
    {
        id: 2,
        placa: "abc-4321",
        modelo: "Volvo FH16",
        dtValTacografo: "10/04/2025",
        kilometragem: "150.234.756"
    },
    {
        id: 3,
        placa: "xyz-9876",
        modelo: "Mercedes-Benz Actros",
        dtValTacografo: "05/11/2024",
        kilometragem: "200.564.010"
    },
    {
        id: 4,
        placa: "def-7654",
        modelo: "Ford Cargo 2429",
        dtValTacografo: "30/01/2023",
        kilometragem: "99.876.543"
    },
    {
        id: 5,
        placa: "ghi-2468",
        modelo: "Iveco Tector",
        dtValTacografo: "15/07/2025",
        kilometragem: "120.345.678"
    }
])



</script>