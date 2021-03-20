<template>
  <div class="home flex-grow-1 container">
    <div class="row py-2 pt-4">
      <div class="col-6">
        <div class="d-flex justify-content-between">
          <h2>Current Bugs</h2>
          <button class="btn btn-dark text-light">
            Report
          </button>
        </div>
      </div>
      <div class="col-6">
        <!-- <div class="w-100 h-100 d-block"> -->
        <!-- <div class="ml-auto mt-auto"> -->
        <input class="mt-auto ml-auto mr-2" type="checkbox" name="hideClosed">
        <label class="mt-auto" for="hideClosed"><small>Hide Closed Bugs?</small></label>
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </div>
    <!-- Label Row -->
    <div class="row">
      <div class="col-12">
        <div class="container">
          <div class="row">
            <div class="col-4">
              Title
            </div>
            <div class="col-3">
              Reported By
            </div>
            <div class="col-2">
              Status
            </div>
            <div class="col-3">
              Last Modified
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bug Rows -->
    <div class="row" />
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
