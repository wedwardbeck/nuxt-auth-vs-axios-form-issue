<template>
  <div>
    <b-table
      :data="isEmpty ? [] : data"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      :mobile-cards="hasMobileCards"
      default-sort="name1"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column
          field="id"
          label="ID"
          width="40"
          sortable
          numeric
        >
          {{ props.row.id }}
        </b-table-column>

        <b-table-column
          field="name1"
          label="Vendor Name"
          width="50"
          sortable
          searchable
        >
          <nuxt-link :to="{name: 'vendors-id', params: { id:props.row.id } }">
            {{ props.row.name1 }}
          </nuxt-link>
        </b-table-column>
        <!--
          <b-table-column
            field="name2"
            label="Name 2"
            class="is-hidden-mobile"
            sortable
          >
            {{ props.row.name2 }}
          </b-table-column> -->

        <b-table-column
          field="parent"
          label="Parent"
          sortable
        >
          {{ props.row.parent }}
        </b-table-column>

        <b-table-column
          field="taxid"
          label="Tax ID"
          sortable
        >
          {{ props.row.taxid }}
        </b-table-column>

        <b-table-column
          field="num_items"
          label="# Items"
          sortable
          numeric
        >
          {{ props.row.num_items }}
        </b-table-column>
        <b-table-column
          field="num_locations"
          label="# Locs"
          sortable
          numeric
        >
          {{ props.row.num_locations }}
        </b-table-column>

        <b-table-column label="Status">
          <span class="level-left">
            <b-icon
              v-if="props.row.status === 2"
              class="level-item"
              pack="fas"
              icon="check-circle"
              type="is-success"
            />
            <b-icon
              v-if="props.row.status === 1"
              class="level-item"
              pack="fas"
              icon="exclamation-triangle"
              type="is-warning"
            />
            <b-icon
              v-if="props.row.status === 3"
              class="level-item"
              pack="fas"
              icon="times-circle"
              type="is-danger"
            />
            <!-- {{ props.row.status }} -->
          </span>
        </b-table-column>

        <b-table-column
          field="created_on"
          label="Created"
          sortable
          centered
        >
          <span class="tag">
            {{ new Date(props.row.created_on).toLocaleDateString() }}
          </span>
        </b-table-column>

        <b-table-column
          field="updated_on"
          label="Updated"
          sortable
          centered
        >
          <span class="tag">
            {{ new Date(props.row.updated_on).toLocaleDateString() }}
          </span>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: "bottom",
      defaultSortDirection: "asc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 25,
      isEmpty: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: true,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true
    }
  },
  computed: {
    data() {
      return this.$store.state.flowDocuments.all
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
