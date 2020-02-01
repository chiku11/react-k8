### Istio Installation
Open terminal
cd ~
curl -L https://istio.io/downloadIstio | sh -

## Add istoctl to your bash profile or zshrc

export PATH="$PATH:~/istio-1.4.3/bin"

# open terminal
istioctl

you should see bunch of blah blah.

You are all set.

### Setup

Open terminal type below command

istioctl manifest apply --set profile=demo


To Delete open a terminal and type below command

istioctl manifest generate --set profile=demo | kubectl delete -f -

### Important

kubectl create ns istio-demo

We will be deploying all our Objects in istio-demo.

add label istio-injected=enabled to istio-demo

kubectl label namespace istio-demo istio-injection=enabled
