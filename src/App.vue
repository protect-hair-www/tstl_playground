<template>
  <div class="menu-demo">
    <a-menu mode="horizontal" :default-selected-keys="['1']">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div
          :style="{
            width: '80px',
            height: '30px',
            borderRadius: '2px',
            textAlign: 'center',
            background: 'var(--color-fill-3)',
            cursor: 'text',
          }"
        >TSTL</div>
      </a-menu-item>
      <a-menu-item key="home"><router-link to="home">Home</router-link></a-menu-item>
      <a-menu-item key="document"><router-link to="/components">document</router-link></a-menu-item>
    </a-menu>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  /* padding: 40px; */
  background-color: var(--color-neutral-2);
}
</style>
