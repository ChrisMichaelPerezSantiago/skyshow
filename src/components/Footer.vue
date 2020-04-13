<template>
  <footer class="container">
    <b-field grouped group-multiline>
      <div class="control">
        <b-taglist attached>
          <b-tag type="is-dark">with ❤️ copyright</b-tag>
          <b-tag  style="background-color: #fa1e4e;" type="is-info">{{year}}</b-tag>
        </b-taglist>
      </div>

      <div class="control" id="version">
        <b-taglist attached>
          <b-tag type="is-dark">version</b-tag>
          <b-tag style="background-color: #fa1e4e;" type="is-info">{{version}}</b-tag>
        </b-taglist>
      </div>
    </b-field>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    setup(){
      const state = {
        version: require('../../package.json').version,
        year: new Date().getFullYear()
      };

      return{
        ...state
      }
    }
  };
</script>