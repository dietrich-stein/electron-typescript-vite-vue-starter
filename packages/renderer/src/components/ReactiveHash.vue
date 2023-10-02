<script lang="ts" setup>
import { computed, ref } from 'vue';
import { sha256sum } from '#preload';

const rawString = ref('Hello World');

/*async function sha256fallback(message: string) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}*/

const hashedString = computed(() => {
  if (typeof sha256sum !== 'undefined') {
    return sha256sum(rawString.value);
  } else {
    // @TODO: This was just a bit of sillyness anyway. We don't need a fallback.
    // @TODO: But, if we wanted to, we could pull this off using `vue-async-computed`.
    return 'n/a'; /*sha256fallback(rawString.value).then(value => {
      return value;
    });*/
  }
});

</script>

<template>
  <table>
    <tr>
      <th>
        <label for="reactive-hash-raw-value">Raw value :</label>
      </th>
      <td>
        <input
          id="reactive-hash-raw-value"
          v-model="rawString"
          type="text"
        />
      </td>
    </tr>

    <tr>
      <th>
        <label for="reactive-hash-hashed-value">Hashed by node:crypto :</label>
      </th>
      <td>
        <input
          id="reactive-hash-hashed-value"
          v-model="hashedString"
          readonly
          type="text"
        />
      </td>
    </tr>
  </table>
  <code>packages/renderer/src/components/ReactiveHash.vue</code>
</template>

<style scoped>
table {
  margin: auto;
}

th {
  text-align: right;
}

td {
  text-align: left;
}
</style>
