//import React from 'react'
//import classNames from 'classnames'
import React, { createRef } from "react";
import ReactDOM from 'react-dom'
import Sidebar from "./sidebar";
import Searchbar from "./searchbar";
import { DataSet, Network } from 'vis-network/standalone/esm/vis-network';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "semantic-ui-react";
import { timingSafeEqual } from "crypto";

/*const nodes = new DataSet()
const edges = new DataSet()
*/

const nodes = new DataSet(
  [
    {
      "abstract": "In this work we establish dense correspondences between an RGB image and a surface-based representation of the human body, a task we refer to as dense human pose estimation. We gather dense correspondences for 50K persons appearing in the COCO dataset by introducing an efficient annotation pipeline. We then use our dataset to train CNN-based systems that deliver dense correspondence 'in the wild', namely in the presence of background, occlusions and scale variations. We improve our training set's effectiveness by training an inpainting network that can fill in missing ground truth values and report improvements with respect to the best results that would be achievable in the past. We experiment with fully-convolutional networks and region-based models and observe a superiority of the latter. We further improve accuracy through cascading, obtaining a system that delivers highly-accurate results at multiple frames per second on a single gpu. Supplementary materials, data, code, and videos are provided on the project page http://densepose.org.",
      "id": 0,
      "label": "DensePose: Dense Human Pose\nEstimation in the Wild",
      "level": 0,
      "size": 53.06975715101405,
      "title": 278,
      "url": "https://www.semanticscholar.org/paper/8c94385d45f5896e748e43171eeaaa259009faab"
    },
    {
      "abstract": "We present a new dataset with the goal of advancing the state-of-the-art in object recognition by placing the question of object recognition in the context of the broader question of scene understanding. This is achieved by gathering images of complex everyday scenes containing common objects in their natural context. Objects are labeled using per-instance segmentations to aid in precise object localization. Our dataset contains photos of 91 objects types that would be easily recognizable by a 4 year old. With a total of 2.5 million labeled instances in 328k images, the creation of our dataset drew upon extensive crowd worker involvement via novel user interfaces for category detection, instance spotting and instance segmentation. We present a detailed statistical analysis of the dataset in comparison to PASCAL, ImageNet, and SUN. Finally, we provide baseline performance analysis for bounding box and segmentation detection results using a Deformable Parts Model.",
      "id": 1,
      "label": "Microsoft COCO: Common Objects\nin Context",
      "level": 1,
      "size": 187.99498234159992,
      "title": 8024,
      "url": "https://www.semanticscholar.org/paper/71b7178df5d2b112d07e45038cb5637208659ff7"
    },
    {
      "abstract": "We present a conceptually simple, flexible, and general framework for object instance segmentation. Our approach efficiently detects objects in an image while simultaneously generating a high-quality segmentation mask for each instance. The method, called Mask R-CNN, extends Faster R-CNN by adding a branch for predicting an object mask in parallel with the existing branch for bounding box recognition. Mask R-CNN is simple to train and adds only a small overhead to Faster R-CNN, running at 5 fps. Moreover, Mask R-CNN is easy to generalize to other tasks, e.g., allowing us to estimate human poses in the same framework. We show top results in all three tracks of the COCO suite of challenges, including instance segmentation, bounding-box object detection, and person keypoint detection. Without bells and whistles, Mask R-CNN outperforms all existing, single-model entries on every task, including the COCO 2016 challenge winners. We hope our simple and effective approach will serve as a solid baseline and help ease future research in instance-level recognition. Code has been made available at: https://github.com/facebookresearch/Detectron.",
      "id": 2,
      "label": "Mask R-CNN",
      "level": 1,
      "size": 115.33927418829606,
      "title": 1812,
      "url": "https://www.semanticscholar.org/paper/1a0912bb76777469295bb2c059faee907e7f3258"
    },
    {
      "abstract": "We present a learned model of human body shape and pose-dependent shape variation that is more accurate than previous models and is compatible with existing graphics pipelines. Our Skinned Multi-Person Linear model (SMPL) is a skinned vertex-based model that accurately represents a wide variety of body shapes in natural human poses. The parameters of the model are learned from data including the rest pose template, blend weights, pose-dependent blend shapes, identity-dependent blend shapes, and a regressor from vertices to joint locations. Unlike previous models, the pose-dependent blend shapes are a linear function of the elements of the pose rotation matrices. This simple formulation enables training the entire model from a relatively large number of aligned 3D meshes of different people in different poses. We quantitatively evaluate variants of SMPL using linear or dual-quaternion blend skinning and show that both are more accurate than a Blend-SCAPE model trained on the same data. We also extend SMPL to realistically model dynamic soft-tissue deformations. Because it is based on blend skinning, SMPL is compatible with existing rendering engines and we make it available for research purposes.",
      "id": 3,
      "label": "SMPL: a skinned multi-person\nlinear model",
      "level": 1,
      "size": 69.91146443677366,
      "title": 509,
      "url": "https://www.semanticscholar.org/paper/32d3048a4fe4becc7c4638afd05f2354b631cfca"
    },
    {
      "abstract": "In this paper a method for estimating a rigid skeleton, including skinning weights, skeleton connectivity, and joint positions, given a sparse set of example poses is presented. In contrast to other methods, we are able to simultaneously take examples of different subjects into account, which improves the robustness of the estimation. It is additionally possible to generate a skeleton that primarily describes variations in body shape instead of pose. The shape skeleton can then be combined with a regular pose varying skeleton. That way pose and body shape can be controlled simultaneously but separately. As this skeleton is technically still just a skinned rigid skeleton, compatibility with major modelling packages and game engines is retained. We further present an approach for synthesizing a suitable bind shape that additionally improves the accuracy of the generated model.",
      "id": 4,
      "label": "Learning skeletons for shape\nand pose",
      "level": 2,
      "size": 16.653651200918013,
      "title": 39,
      "url": "https://www.semanticscholar.org/paper/18cf5ac7e602cea7d743cbde9b66a6da6e1120dc"
    },
    {
      "abstract": "The goal of this paper is to serve as a guide for selecting a detection architecture that achieves the right speed/memory/accuracy balance for a given application and platform. To this end, we investigate various ways to trade accuracy for speed and memory usage in modern convolutional object detection systems. A number of successful systems have been proposed in recent years, but apples-toapples comparisons are difficult due to different base feature extractors (e.g., VGG, Residual Networks), different default image resolutions, as well as different hardware and software platforms. We present a unified implementation of the Faster R-CNN [30], R-FCN [6] and SSD [25] systems, which we view as meta-architectures and trace out the speed/accuracy trade-off curve created by using alternative feature extractors and varying other critical parameters such as image size within each of these meta-architectures. On one extreme end of this spectrum where speed and memory are critical, we present a detector that achieves real time speeds and can be deployed on a mobile device. On the opposite end in which accuracy is critical, we present a detector that achieves state-of-the-art performance measured on the COCO detection task.",
      "id": 5,
      "label": "Speed/Accuracy Trade-Offs for\nModern Convolutional Object\nDetectors",
      "level": 2,
      "size": 94.41248856474257,
      "title": 1060,
      "url": "https://www.semanticscholar.org/paper/a312a573ef81793d56401e932ef6c9498791a3d1"
    },
    {
      "abstract": "Semantic segmentation research has recently witnessed rapid progress, but many leading methods are unable to identify object instances. In this paper, we present Multitask Network Cascades for instance-aware semantic segmentation. Our model consists of three networks, respectively differentiating instances, estimating masks, and categorizing objects. These networks form a cascaded structure, and are designed to share their convolutional features. We develop an algorithm for the nontrivial end-to-end training of this causal, cascaded structure. Our solution is a clean, single-step training framework and can be generalized to cascades that have more stages. We demonstrate state-of-the-art instance-aware semantic segmentation accuracy on PASCAL VOC. Meanwhile, our method takes only 360ms testing an image using VGG-16, which is two orders of magnitude faster than previous systems for this challenging problem. As a by product, our method also achieves compelling object detection results which surpass the competitive Fast/Faster R-CNN systems. The method described in this paper is the foundation of our submissions to the MS COCO 2015 segmentation competition, where we won the 1st place.",
      "id": 6,
      "label": "Instance-Aware Semantic\nSegmentation via Multi-task\nNetwork Cascades",
      "level": 2,
      "size": 75.68606078379722,
      "title": 613,
      "url": "https://www.semanticscholar.org/paper/1e9b1f6061ef779e3ad0819c2832a29168eaeb9d"
    },
    {
      "abstract": "We present the first fully convolutional end-to-end solution for instance-aware semantic segmentation task. It inherits all the merits of FCNs for semantic segmentation [29] and instance mask proposal [5]. It performs instance mask prediction and classification jointly. The underlying convolutional representation is fully shared between the two sub-tasks, as well as between all regions of interest. The network architecture is highly integrated and efficient. It achieves state-of-the-art performance in both accuracy and efficiency. It wins the COCO 2016 segmentation competition by a large margin. Code would be released at https://github.com/daijifeng001/TA-FCN.",
      "id": 7,
      "label": "Fully Convolutional Instance-\nAware Semantic Segmentation",
      "level": 2,
      "size": 62.70868126922051,
      "title": 398,
      "url": "https://www.semanticscholar.org/paper/0366b36006a6b37c673a42aad03ae77e8ef6ecda"
    },
    {
      "abstract": "We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest into the 1000 different classes. On the test data, we achieved top-1 and top-5 error rates of 37.5% and 17.0% which is considerably better than the previous state-of-the-art. The neural network, which has 60 million parameters and 650,000 neurons, consists of five convolutional layers, some of which are followed by max-pooling layers, and three fully-connected layers with a final 1000-way softmax. To make training faster, we used non-saturating neurons and a very efficient GPU implementation of the convolution operation. To reduce overriding in the fully-connected layers we employed a recently-developed regularization method called \"dropout\" that proved to be very effective. We also entered a variant of this model in the ILSVRC-2012 competition and achieved a winning top-5 test error rate of 15.3%, compared to 26.2% achieved by the second-best entry.",
      "id": 8,
      "label": "ImageNet Classification with\nDeep Convolutional Neural\nNetworks",
      "level": 2,
      "size": 200.66708420083214,
      "title": 9997,
      "url": "https://www.semanticscholar.org/paper/abd1c342495432171beb7ca8fd9551ef13cbd0ff"
    },
    {
      "abstract": "We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest into the 1000 different classes. On the test data, we achieved top-1 and top-5 error rates of 37.5% and 17.0% which is considerably better than the previous state-of-the-art. The neural network, which has 60 million parameters and 650,000 neurons, consists of five convolutional layers, some of which are followed by max-pooling layers, and three fully-connected layers with a final 1000-way softmax. To make training faster, we used non-saturating neurons and a very efficient GPU implementation of the convolution operation. To reduce overriding in the fully-connected layers we employed a recently-developed regularization method called \"dropout\" that proved to be very effective. We also entered a variant of this model in the ILSVRC-2012 competition and achieved a winning top-5 test error rate of 15.3%, compared to 26.2% achieved by the second-best entry.",
      "id": 9,
      "label": "ImageNet Classification with\nDeep Convolutional Neural\nNetworks",
      "level": 2,
      "size": 200.66708420083214,
      "title": 9997,
      "url": "https://www.semanticscholar.org/paper/abd1c342495432171beb7ca8fd9551ef13cbd0ff"
    },
    {
      "abstract": "Object detection performance, as measured on the canonical PASCAL VOC dataset, has plateaued in the last few years. The best-performing methods are complex ensemble systems that typically combine multiple low-level image features with high-level context. In this paper, we propose a simple and scalable detection algorithm that improves mean average precision (mAP) by more than 30% relative to the previous best result on VOC 2012 -- achieving a mAP of 53.3%. Our approach combines two key insights: (1) one can apply high-capacity convolutional neural networks (CNNs) to bottom-up region proposals in order to localize and segment objects and (2) when labeled training data is scarce, supervised pre-training for an auxiliary task, followed by domain-specific fine-tuning, yields a significant performance boost. Since we combine region proposals with CNNs, we call our method R-CNN: Regions with CNN features. We also present experiments that provide insight into what the network learns, revealing a rich hierarchy of image features. Source code for the complete system is available at http://www.cs.berkeley.edu/~rbg/rcnn.",
      "id": 10,
      "label": "Rich Feature Hierarchies for\nAccurate Object Detection and\nSemantic Segmentation",
      "level": 2,
      "size": 195.16550739023054,
      "title": 9097,
      "url": "https://www.semanticscholar.org/paper/a9ce496186120df8f9ed3367e76a4947419e992e"
    },
    {
      "abstract": "Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. On the ImageNet dataset we evaluate residual nets with a depth of up to 152 layers - 8× deeper than VGG nets [40] but still having lower complexity. An ensemble of these residual nets achieves 3.57% error on the ImageNet test set. This result won the 1st place on the ILSVRC 2015 classification task. We also present analysis on CIFAR-10 with 100 and 1000 layers. The depth of representations is of central importance for many visual recognition tasks. Solely due to our extremely deep representations, we obtain a 28% relative improvement on the COCO object detection dataset. Deep residual nets are foundations of our submissions to ILSVRC & COCO 2015 competitions1, where we also won the 1st places on the tasks of ImageNet detection, ImageNet localization, COCO detection, and COCO segmentation.",
      "id": 11,
      "label": "Deep Residual Learning for\nImage Recognition",
      "level": 3,
      "size": 200.6199929303714,
      "title": 9989,
      "url": "https://www.semanticscholar.org/paper/2c03df8b48bf3fa39054345bafabfeff15bfd11d"
    },
    {
      "abstract": "State-of-the-art object detection networks depend on region proposal algorithms to hypothesize object locations. Advances like SPPnet and Fast R-CNN have reduced the running time of these detection networks, exposing region proposal computation as a bottleneck. In this work, we introduce a Region Proposal Network (RPN) that shares full-image convolutional features with the detection network, thus enabling nearly cost-free region proposals. An RPN is a fully convolutional network that simultaneously predicts object bounds and objectness scores at each position. The RPN is trained end-to-end to generate high-quality region proposals, which are used by Fast R-CNN for detection. We further merge RPN and Fast R-CNN into a single network by sharing their convolutional features---using the recently popular terminology of neural networks with 'attention' mechanisms, the RPN component tells the unified network where to look. For the very deep VGG-16 model, our detection system has a frame rate of 5fps (including all steps) on a GPU, while achieving state-of-the-art object detection accuracy on PASCAL VOC 2007, 2012, and MS COCO datasets with only 300 proposals per image. In ILSVRC and COCO 2015 competitions, Faster R-CNN and RPN are the foundations of the 1st-place winning entries in several tracks. Code has been made publicly available",
      "id": 12,
      "label": "Faster R-CNN: Towards Real-\nTime Object Detection with\nRegion Proposal Networks",
      "level": 3,
      "size": 200.6199929303714,
      "title": 9989,
      "url": "https://www.semanticscholar.org/paper/424561d8585ff8ebce7d5d07de8dbf7aae5e7270"
    },
    {
      "abstract": "This paper proposes a Fast Region-based Convolutional Network method (Fast R-CNN) for object detection. Fast R-CNN builds on previous work to efficiently classify object proposals using deep convolutional networks. Compared to previous work, Fast R-CNN employs several innovations to improve training and testing speed while also increasing detection accuracy. Fast R-CNN trains the very deep VGG16 network 9x faster than R-CNN, is 213x faster at test-time, and achieves a higher mAP on PASCAL VOC 2012. Compared to SPPnet, Fast R-CNN trains VGG16 3x faster, tests 10x faster, and is more accurate. Fast R-CNN is implemented in Python and C++ (using Caffe) and is available under the open-source MIT License at https://github.com/rbgirshick/fast-rcnn.",
      "id": 13,
      "label": "Fast R-CNN",
      "level": 3,
      "size": 178.17334635867186,
      "title": 6723,
      "url": "https://www.semanticscholar.org/paper/7ffdbc358b63378f07311e883dddacc9faeeaf4b"
    }
  ]);

// create an array with edges
const edges = new DataSet([
  {
    "from": 0,
    "to": 1,
    "id": "e5441d4d-7837-43d0-b0d2-65279dc6e6d0"
  },
  {
    "from": 0,
    "to": 2,
    "id": "25380116-3334-4e98-9cd0-c2867a51146e"
  },
  {
    "from": 0,
    "to": 3,
    "id": "d32a9b1f-6575-47c8-a21a-9e076b47c1ea"
  },
  {
    "from": 3,
    "to": 4,
    "id": "ff477a62-0226-4a4a-881b-cd6a91e2b412"
  },
  {
    "from": 2,
    "to": 5,
    "id": "769427f6-9c73-480f-97fb-65b92fcec688"
  },
  {
    "from": 2,
    "to": 6,
    "id": "b87569e4-7bbb-40a1-aea8-14201127eb63"
  },
  {
    "from": 2,
    "to": 7,
    "id": "c926c443-e2de-4293-ba49-d8b2b4455ca2"
  },
  {
    "from": 1,
    "to": 8,
    "id": "2f0f6125-cf2f-4557-8563-3df08933b6cb"
  },
  {
    "from": 1,
    "to": 9,
    "id": "1c32c05a-29f4-44f7-a3ad-4e0cc4e474be"
  },
  {
    "from": 1,
    "to": 10,
    "id": "ad04c719-5931-455f-b8f7-835d51e88515"
  },
  {
    "from": 7,
    "to": 11,
    "id": "9e2d0e07-16b5-4caf-b56c-f1f9a8a73277"
  },
  {
    "from": 7,
    "to": 12,
    "id": "7b4edf92-11bf-4508-82af-aec9120b49ac"
  },
  {
    "from": 7,
    "to": 13,
    "id": "a0f01727-4105-4adf-b0fa-7f0ec22dde76"
  }
]);
const data = {
  nodes: nodes,
  edges: edges
};
var options = {
layout: {
  hierarchical: {
    enabled: true,
    levelSeparation: 400,
    nodeSpacing: 200,
    treeSpacing: 200,
  }
  
},
edges: {
    color: {
        color:'#B8B8B8',
        highlight:'#B8B8B8',
        hover: '#B8B8B8',
        inherit: 'from',
        opacity:1.0
    },
    arrows: {
    to: {
      enabled: true
    }
  },
  smooth: {
    enabled: false,
    type: "dynamic",
    roundness: 0.5
  }
},
interaction: {
  tooltipDelay: 0
},
nodes: {
  shape: 'dot'
},
physics: {
    enabled: false,
    barnesHut: {
    avoidOverlap: 3,
    centralGravity:0.05,
    springLength:500,
    gravitationalConstant:-26,
    springConstant:0.18
    },
    hierarchicalRepulsion:{
        avoidOverlap:100
    },
}
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.nodes = nodes;
    this.edges = edges;
    this.data = data;
    this.options = options; // may be unnecessary
    this.addnode = this.addnode.bind(this);
    this.toggleHierarchy = this.toggleHierarchy.bind(this);
    this.presets = this.presets.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    //this.updateAccessor = this.updateAccessor.bind(this);
    this.nodemap = {
      "DensePose: Dense Human Pose\nEstimation in the Wild": 0,
      "Microsoft COCO: Common Objects\nin Context": 1,
      "Mask R-CNN": 2,
      "SMPL: a skinned multi-person\nlinear model": 3,
      "Learning skeletons for shape\nand pose": 4,
      "Speed/Accuracy Trade-Offs for\nModern Convolutional Object\nDetectors": 5,
      "Instance-Aware Semantic\nSegmentation via Multi-task\nNetwork Cascades": 6,
      "Fully Convolutional Instance-\nAware Semantic Segmentation": 7,
      "ImageNet Classification with\nDeep Convolutional Neural\nNetworks": 9,
      "Rich Feature Hierarchies for\nAccurate Object Detection and\nSemantic Segmentation": 10,
      "Deep Residual Learning for\nImage Recognition": 11,
      "Faster R-CNN: Towards Real-\nTime Object Detection with\nRegion Proposal Networks": 12,
      "Fast R-CNN": 13
    };
    this.edgemap = {
      "0": [
        1,
        2,
        3
      ],
      "1": [
        8,
        9,
        10
      ],
      "2": [
        5,
        6,
        7
      ],
      "3": [
        4
      ],
      "7": [
        11,
        12,
        13
      ]
    };
    this.pendingPromise = false,
    this.queue = []
    this.state = {
      nodeUpdate : [],
      edgeUpdate : [],
      input: '',
      searchbarVal: undefined,
      accessor: '',//"10.1109/CVPR.2018.00762",
      breadth: 3,
      selectednode: {},
      growing: false,
      menuOpen: false
    };
    this.network = null;
    this.appRef = createRef();    
  }

/*updateAccessor = (clickedNode) => {
    this.state.accessor = clickedNode;
  }
*/
  handleChange = (e, data) => {
    this.setState({breadth: data.value});
  }
  handleMessage = (e, data) => {
    console.log('handleMessage')
    this.setState({input: data.value});
  }
  toggleHierarchy = () => {
    console.log(this.options)
    if (this.options.physics['enabled'] == false){
      this.options.layout.hierarchical['enabled'] = true
      this.options.physics['enabled'] = true
    } else{
      this.options.layout.hierarchical['enabled'] = true
      this.options.physics['enabled'] = false
      this.network = new Network(this.appRef.current, this.data, this.options);
      this.options.layout.hierarchical['enabled'] = false
    }
    this.presets()
  }

  presets = () => {
    this.network.on( 'click', function(properties) {
      let ids = properties.nodes;
      let clickedNodes = nodes.get(ids);
      console.log('clicked nodes:', clickedNodes);
      this.setState({selectednode: clickedNodes[0]});
      if (clickedNodes.length == 0){
        this.setState({menuOpen: false})
      } else {
        this.setState({searchbarVal: ''})
        this.setState({searchbarVal: undefined})
        this.setState({menuOpen : true})
      }
    }.bind(this));
    //this.options.layout.hierarchical['enabled'] = false;
    //this.options.physics['enabled'] = true
    this.network.setOptions(this.options)
  }

  componentDidMount() {
    this.network = new Network(this.appRef.current, this.data, this.options);
    //console.log('called')
    this.presets();
    window.network = this
  }

  computeUpdates = (graph) => {
    /*If any node is a duplicate, do not connect it again
    Instead, add the edge from the source to the node already in the graph
    if both the */
    //If node is not a duplicate, add it to the graph and add the connect
    var nodesToAdd = [] //list of obj
    var edgemapToAdd = {} // {0:[1,2,3]}
    var edgesToAdd = [] // list of obj
    for (var i = 0; i < graph.nodes.length; i++){
      if (!(graph.nodes[i]['label'] in this.nodemap)){ // if node is not a duplicate, add
        if (this.state.growing == false){
          graph.nodes[i]['id'] = i
        } else {
          graph.nodes[i]['id'] = this.nodes.length + i - 1
        }
        if ((i > 0) && (!this.nodemap[graph.nodes[0]['label']] == false)){
          graph.nodes[i]['level'] = this.nodes.get(this.nodemap[graph.nodes[0]['label']])['level']+1
        }
        nodesToAdd.push(graph.nodes[i])
      }
    }
    for (var i = 0; i < graph.edges.length; i++){ //if edge not already in edgemap, add edge to net and edgemap
      let internaldest = graph.edges[i]['to']
      if (this.state.growing == true){
        //only if we're growing leaves on the tree, look in the nodemap
        graph.edges[i]['from'] = this.nodemap[graph.nodes[0]['label']]
        graph.edges[i]['to'] += this.nodes.length-1
      } else {
        graph.edges[i]['to'] += this.nodes.length
      }
      //correct indices to what they should be on write
      //look at the first node in the res graph to find its name, then find its index to which
      //we should attach the edges
      //if the dest node already exists in the graph, point towards that instead
      console.log('internaldest!', internaldest)
      if (!!this.nodemap[graph.nodes[internaldest]['label']]){
        console.log('repeat!')
        graph.edges[i]['to'] = this.nodemap[graph.nodes[internaldest]['label']]
      }
      console.log(graph.edges[i]['to'], graph.edges[i]['from'], graph.edges[i])
      if ((!this.edgemap[graph.edges[i]['from']]) || 
        (!this.edgemap[graph.edges[i]['from']].includes(graph.edges[i]['to']))){
        edgesToAdd.push(graph.edges[i])
        //because of the above line, we have to directly change the properties of each edge object
        if (!edgemapToAdd[graph.edges[i]['from']]){
          edgemapToAdd[graph.edges[i]['from']] = [graph.edges[i]['to']]
        } else {
          edgemapToAdd[graph.edges[i]['from']].push(graph.edges[i]['to'])
        }
      }
    }
    console.log('edgesToAdd', edgesToAdd)
    for (var i = 0; i < nodesToAdd.length; i++){
      this.nodemap[nodesToAdd[i]['label']] = nodesToAdd[i]['id']
    }

    for (var key in edgemapToAdd){
      if (!(this.edgemap[key])){
        this.edgemap[key] = edgemapToAdd[key]
      } else {
        this.edgemap[key] = this.edgemap[key].concat(edgemapToAdd[key])
      }
    }
    console.log(this.nodemap)
    console.log(this.edgemap)
    this.setState({nodeUpdate: nodesToAdd})
    this.setState({edgeUpdate: edgesToAdd})
    return
    }

  enqueue = async (promise) => {
    return new Promise((resolve, reject) => {
      this.queue.push({
        promise,
        resolve,
        reject,
      });
      this.dequeue();
    });
  }

  dequeue = () => {
    if (this.workingOnPromise) {
      return false;
    }
    const item = this.queue.shift();
    if (!item) {
      return false;
    }
    try {
      this.workingOnPromise = true;
      item.promise()
        .then((value) => {
          this.workingOnPromise = false;
          item.resolve(value);
          this.dequeue();
        })
        .catch(err => {
          this.workingOnPromise = false;
          item.reject(err);
          this.dequeue();
        })
    } catch (err) {
      this.workingOnPromise = false;
      item.reject(err);
      this.dequeue();
    }
    return true;
  }

  fetchGraph = async () => {
    if ((!this.state.selectednode == false) && (this.state.input == '') && (this.state.selectednode.hasOwnProperty('url'))){
      let accessor = this.state.selectednode['url'].split('/')
      this.state.accessor = accessor[accessor.length-1]
      this.state.growing = true
    } else {
      this.state.accessor = this.state.input
      this.state.growing = false
      this.nodemap = {}
      this.edgemap = {}
      this.nodes.clear()
      this.edges.clear()
    }
    console.log("accessor!", this.state.accessor)
    let toastId = toast(<div style = {{"textAlign": "center"}}><p>Looking in {this.state.accessor}...</p>
    <ClipLoader
      size = {15}
      color = {"#000000"}/></div>);
    let res = await this.enqueue(()=>
      fetch('/buildgraph?accessor='+ this.state.accessor + '&breadth='+ this.state.breadth))
    await console.log(res)
    let graph = await res.json()
    console.log(graph)
    if (graph.hasOwnProperty('error')){
      toast.dismiss(toastId);
      toast.error(<div style = {{"textAlign": "center"}}>
      <p>Something went wrong.</p>
      <p>We probably couldn't find the paper you were looking for</p>
      </div>, {
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      closeButton: true,
      autoClose: 5000,
      progress: undefined
    })
    } else {
      this.computeUpdates(graph)
      /*
      this.state.nodeUpdate = updates[0]
      this.state.edgeUpdate = updates[1]
      this.setState({nodeUpdate: graph.nodes})
      this.setState({edgeUpdate: graph.edges})*/
      toast.dismiss(toastId);
      toast.success(<div style = {{"textAlign": "center"}}>
        <p>Added {Object.keys(this.state.nodeUpdate).length} nodes to the graph</p>
        </div>, {
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        closeButton: true,
        autoClose: 5000,
        progress: undefined
      })
    return
  }
}

  addnode = async () => {
    await this.fetchGraph();
    if (Object.keys(this.state.nodeUpdate).length > 0){
      if (this.state.growing == false){
        this.edges.clear() 
        this.nodes.clear()
      }
      console.log(this.state.growing)
      this.nodes.update(this.state.nodeUpdate);
      this.edges.update(this.state.edgeUpdate);
      if (this.state.growing == false){
        this.toggleHierarchy()
      }
    }
    this.state.input = ''
  }


  render() {
    const wrap = (props) => {
      return (
      <div id="App">
        <Sidebar {...props} 
          addnode = {this.addnode} 
          toggleHierarchy = {this.toggleHierarchy}
          selectednode = {this.state.selectednode}
          menuOpen = {this.state.menuOpen}
        />
        <div id = "network" style = {{height:"100vh"}} ref={this.appRef}/>
        <div id = "searchbar" style = {{position: "absolute", top:"7.1vh", 
                                        left:"50%", transform: "translate(-50%,-50%)"}}> 
          <Searchbar 
            handleChange = {this.handleChange}
            handleMessage = {this.handleMessage}
            addnode = {this.addnode}
            searchbarVal = {this.state.searchbarVal}
            selectednode = {this.state.selectednode}
          />
        </div>
        <Button style = {{position: "absolute", right:"-1%", top:"7.1vh", transform: "translate(-50%, -50%)"}} onClick={this.toggleHierarchy}>Reset</Button>
        <ToastContainer
          position="bottom-center"
          autoClose={false}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          closeButton={false}
        />
      </div>
      );
    }
    return wrap()
  }
}

var app = ReactDOM.render(<App/>, document.querySelector('#container'))
//import VisNetwork from "./network";
//import "./styles.css";
/*
const nodes = new vis.DataSet([
  { id: 1, label: 'Node 1' , title:'This is a tooltip<br>TOOLip NEWline!!!'},
  { id: 2, label: 'Node 2' , title:'This is a tooltip'},
  { id: 3, label: 'Node 3' , title:'This is a tooltip'},
  { id: 4, label: 'Node 4' , title:'This is a tooltip'},
  { id: 5, label: 'Node 5' , title:'This is a tooltip'}
]);

// create an array with edges
const edges = new vis.DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 }
]);

const data = {
  nodes: nodes,
  edges: edges
};
const options = {
  layout: {
      hierarchical: false
  },
  edges: {
      color: "#000000",
      arrows:{
      to:{
          enabled:true
      }  
      },
      smooth: {
          enabled: true,
          type: "dynamic",
          roundness: 0.5
      }
  },
  interaction: {
      tooltipDelay: 0
  }    
}

// initialize your network!

class VisNetwork extends Component {

  constructor() {
    super();
    this.network = {};
    this.appRef = createRef();
  }

  componentDidMount() {
    this.network = new vis.Network(this.appRef.current, data, options);
  }

  render() {
    return (
      <div style = {{height:"100vh"}} ref={this.appRef} />
    );
  }
}
*/
