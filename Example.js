const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

k8sApi.listNamespacedPod('default').then((res) => {
    console.log(res.body);
 });


 // run : node .\Example.js

 
 // output:
 /*
 V1PodList {
  apiVersion: 'v1',
  items: [],
  kind: 'PodList',
  metadata: V1ListMeta {
    _continue: undefined,
    remainingItemCount: undefined,
    resourceVersion: '36071',
    selfLink: '/api/v1/namespaces/default/pods'
  }
}
 */