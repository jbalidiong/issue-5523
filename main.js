import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp} from 'firebase/app';
import { ref, getDatabase, onChildAdded} from 'firebase/database';

const config = {
apiKey: "",
authDomain: "",
databaseURL: "",
projectId: "",
storageBucket: "",
messagingSenderId: "",
appId: "",
measurementId: ""
};

const firebaseApp = initializeApp(config);

const state = reactive({
    get dbRef () {
      const db = getDatabase(firebaseApp)
      return ref(db, 'users')
    },
  
    listen () {

      onChildAdded(this.dbRef, data => {
        console.log('New data at mypath')
        // populate a list
      })
    }
  })

console.log(state.listen());
createApp(App).use(router).mount('#app')
