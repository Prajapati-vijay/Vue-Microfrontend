# Vue Microfrontend using module federation
First go host app
```
cd /host
npm i
npm run server
```
Now do same for microfrontend-1 and microfrontend-2

```
cd /microfrontend-1
npm i
npm run server


cd /microfrontend-2
npm i
npm run server
```

Note: If your apps are running on different port then change them in vue.congif.js file.

Now when you will visit host app then you will see the components of microfrontend-1 and microfrontend-2 in host(consumer) app and you can change them in real time.


