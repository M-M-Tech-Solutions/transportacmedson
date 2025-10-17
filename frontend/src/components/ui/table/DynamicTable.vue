<template>
  <div>
    <!-- Tabela desktop/tablet -->
    <div class="hidden md:block border rounded-md">
      <Table>
        <TableCaption v-if="caption">{{ caption }}</TableCaption>
        <TableHeader>
          <TableRow class="bg-main hover:bg-main">
            <TableHead v-for="col in columns" :key="col.key" class="text-white truncate" :style="{
              width: col.width,
              maxWidth: col.maxWidth,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }">
              {{ col.label }}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="paginatedItems.length > 0">
            <TableRow v-for="row in paginatedItems" :key="row[idKey]" class="group">
              <TableCell v-for="col in columns" :key="col.key" class="truncate" :style="{
                maxWidth: col.maxWidth,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }" :title="props.enableTooltip ? row[col.key] : ''">
                <template v-if="col.key !== 'actions'">
                  {{ row[col.key] }}
                </template>
                <template v-else>
                  <!-- Dropdown só visível no hover da linha -->
                  <div class="invisible group-hover:visible flex justify-center ">
                    <slot name="actions" :row="row" />
                  </div>
                </template>
              </TableCell>
            </TableRow>

          </template>
          <template v-else>
            <TableRow>
              <TableCell :colspan="columns.length" class="text-center">
                Nenhum registro encontrado!
              </TableCell>
            </TableRow>
          </template>
        </TableBody>
      </Table>
    </div>

    <!-- Tabela mobile: cada linha como cartão -->
    <div class="block md:hidden w-full overflow-x-hidden">
      <div v-if="paginatedItems.length > 0" v-for="row in paginatedItems" :key="row[idKey]"
        class="rounded-lg mb-4 p-4 bg-gray-50 border shadow">
        <div v-for="col in columns" :key="col.key" class="mb-2">
          <div class="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
            {{ col.label }}
          </div>
          <div class="text-base text-gray-900 w-full break-words whitespace-pre-line" style="word-break: break-word;">
            {{ row[col.key] }}
          </div>
        </div>


        <div v-if="$slots.actions" class="mt-4 flex justify-end">
          <slot name="actions" :row="row" />
        </div>
      </div>
      <div v-else class="text-center text-gray-500 py-6 border rounded bg-white">
        Nenhum registro encontrado!
      </div>
    </div>


    <!-- Paginação -->
    <div v-if="paginatedItems.length > 0" class="w-full flex">
      <div class="ml-auto flex items-center mt-4 space-x-2">
        <Pagination :items-per-page="itemsPerPage" :total="items.length" :default-page="currentPage"
          @update:page="currentPage = $event" v-slot="{ page }">
          <PaginationContent>
            <PaginationPrevious @click="previousPage" />
            <template v-for="pg in pages" :key="pg">
              <PaginationItem :value="pg" :is-active="page === pg" @click="goToPage(pg)">
                {{ pg }}
              </PaginationItem>
            </template>
            <PaginationNext @click="nextPage" />
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Table, TableBody, TableCaption,
  TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import {
  PaginationContent, PaginationItem,
  PaginationNext, PaginationPrevious, Pagination,
} from '@/components/ui/pagination'

import { ref, computed, watch } from 'vue'

export interface Column {
  key: string
  label: string
  width?: string    // Ex: "120px", "w-32"
  maxWidth?: string // Ex: "200px", "w-48"
}


interface Props {
  items: Record<string, any>[]
  columns: Column[]
  caption?: string
  itemsPerPage?: number
  idKey?: string
  enableTooltip?: boolean

}

const props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 10,
  idKey: 'id',
  enableTooltip: false
})

const currentPage = ref(1)

const totalPages = computed(() =>
  Math.ceil(props.items.length / props.itemsPerPage)
)

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage
  return props.items.slice(start, start + props.itemsPerPage)
})

const pages = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1))

function goToPage(page: number) {
  currentPage.value = page
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function previousPage() {
  if (currentPage.value > 1) currentPage.value--
}

watch(() => props.items, () => currentPage.value = 1)
</script>
