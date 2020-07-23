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
import { Button, Modal, Header, Description } from "semantic-ui-react";
import { timingSafeEqual } from "crypto";

/*const nodes = new DataSet()
const edges = new DataSet()
*/

const nodes = new DataSet(
  [
    {
      "abstract": "In this work we establish dense correspondences between an RGB image and a surface-based representation of the human body, a task we refer to as dense human pose estimation. We gather dense correspondences for 50K persons appearing in the COCO dataset by introducing an efficient annotation pipeline. We then use our dataset to train CNN-based systems that deliver dense correspondence 'in the wild', namely in the presence of background, occlusions and scale variations. We improve our training set's effectiveness by training an inpainting network that can fill in missing ground truth values and report improvements with respect to the best results that would be achievable in the past. We experiment with fully-convolutional networks and region-based models and observe a superiority of the latter. We further improve accuracy through cascading, obtaining a system that delivers highly-accurate results at multiple frames per second on a single gpu. Supplementary materials, data, code, and videos are provided on the project page http://densepose.org.",
      "articletitle": [
        "DensePose: Dense Human Pose Estimation in the Wild",
        "Microsoft COCO: Common Objects in Context",
        "Mask R-CNN",
        "SMPL: a skinned multi-person linear model"
      ],
      "authors": [
        [
          {
            "authorId": "3616981",
            "name": "Riza Alp Güler",
            "url": "https://www.semanticscholar.org/author/3616981"
          },
          {
            "authorId": "2759569",
            "name": "Natalia Neverova",
            "url": "https://www.semanticscholar.org/author/2759569"
          },
          {
            "authorId": "2010660",
            "name": "Iasonas Kokkinos",
            "url": "https://www.semanticscholar.org/author/2010660"
          }
        ],
        [
          {
            "authorId": "33493200",
            "name": "Tsung-Yi Lin",
            "url": "https://www.semanticscholar.org/author/33493200"
          },
          {
            "authorId": "145854440",
            "name": "Michael Maire",
            "url": "https://www.semanticscholar.org/author/145854440"
          },
          {
            "authorId": "50172592",
            "name": "Serge J. Belongie",
            "url": "https://www.semanticscholar.org/author/50172592"
          },
          {
            "authorId": "48966748",
            "name": "James Hays",
            "url": "https://www.semanticscholar.org/author/48966748"
          },
          {
            "authorId": "1690922",
            "name": "Pietro Perona",
            "url": "https://www.semanticscholar.org/author/1690922"
          },
          {
            "authorId": "1770537",
            "name": "Deva Ramanan",
            "url": "https://www.semanticscholar.org/author/1770537"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "1699161",
            "name": "C. Lawrence Zitnick",
            "url": "https://www.semanticscholar.org/author/1699161"
          }
        ],
        [
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "2082991",
            "name": "Georgia Gkioxari",
            "url": "https://www.semanticscholar.org/author/2082991"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "2983898",
            "name": "Ross B. Girshick",
            "url": "https://www.semanticscholar.org/author/2983898"
          }
        ],
        [
          {
            "authorId": "2409115",
            "name": "Matthew Loper",
            "url": "https://www.semanticscholar.org/author/2409115"
          },
          {
            "authorId": "1892850",
            "name": "Naureen Mahmood",
            "url": "https://www.semanticscholar.org/author/1892850"
          },
          {
            "authorId": "143881914",
            "name": "Javier Romero",
            "url": "https://www.semanticscholar.org/author/143881914"
          },
          {
            "authorId": "2635816",
            "name": "Gerard Pons-Moll",
            "url": "https://www.semanticscholar.org/author/2635816"
          },
          {
            "authorId": "2105795",
            "name": "Michael J. Black",
            "url": "https://www.semanticscholar.org/author/2105795"
          }
        ]
      ],
      "color": {
        "background": "rgba(64.5, 67.5, 80.5, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 0,
      "label": "DensePose: Dense Human Pose\nEstimation in the Wild",
      "level": 0,
      "size": 57.68320995793772,
      "title": 320,
      "url": "https://www.semanticscholar.org/paper/8c94385d45f5896e748e43171eeaaa259009faab",
      "velocity": 105
    },
    {
      "abstract": "We present a new dataset with the goal of advancing the state-of-the-art in object recognition by placing the question of object recognition in the context of the broader question of scene understanding. This is achieved by gathering images of complex everyday scenes containing common objects in their natural context. Objects are labeled using per-instance segmentations to aid in precise object localization. Our dataset contains photos of 91 objects types that would be easily recognizable by a 4 year old. With a total of 2.5 million labeled instances in 328k images, the creation of our dataset drew upon extensive crowd worker involvement via novel user interfaces for category detection, instance spotting and instance segmentation. We present a detailed statistical analysis of the dataset in comparison to PASCAL, ImageNet, and SUN. Finally, we provide baseline performance analysis for bounding box and segmentation detection results using a Deformable Parts Model.",
      "articletitle": [
        "DensePose: Dense Human Pose Estimation in the Wild",
        "Microsoft COCO: Common Objects in Context",
        "Mask R-CNN",
        "SMPL: a skinned multi-person linear model"
      ],
      "authors": [
        [
          {
            "authorId": "3616981",
            "name": "Riza Alp Güler",
            "url": "https://www.semanticscholar.org/author/3616981"
          },
          {
            "authorId": "2759569",
            "name": "Natalia Neverova",
            "url": "https://www.semanticscholar.org/author/2759569"
          },
          {
            "authorId": "2010660",
            "name": "Iasonas Kokkinos",
            "url": "https://www.semanticscholar.org/author/2010660"
          }
        ],
        [
          {
            "authorId": "33493200",
            "name": "Tsung-Yi Lin",
            "url": "https://www.semanticscholar.org/author/33493200"
          },
          {
            "authorId": "145854440",
            "name": "Michael Maire",
            "url": "https://www.semanticscholar.org/author/145854440"
          },
          {
            "authorId": "50172592",
            "name": "Serge J. Belongie",
            "url": "https://www.semanticscholar.org/author/50172592"
          },
          {
            "authorId": "48966748",
            "name": "James Hays",
            "url": "https://www.semanticscholar.org/author/48966748"
          },
          {
            "authorId": "1690922",
            "name": "Pietro Perona",
            "url": "https://www.semanticscholar.org/author/1690922"
          },
          {
            "authorId": "1770537",
            "name": "Deva Ramanan",
            "url": "https://www.semanticscholar.org/author/1770537"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "1699161",
            "name": "C. Lawrence Zitnick",
            "url": "https://www.semanticscholar.org/author/1699161"
          }
        ],
        [
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "2082991",
            "name": "Georgia Gkioxari",
            "url": "https://www.semanticscholar.org/author/2082991"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "2983898",
            "name": "Ross B. Girshick",
            "url": "https://www.semanticscholar.org/author/2983898"
          }
        ],
        [
          {
            "authorId": "2409115",
            "name": "Matthew Loper",
            "url": "https://www.semanticscholar.org/author/2409115"
          },
          {
            "authorId": "1892850",
            "name": "Naureen Mahmood",
            "url": "https://www.semanticscholar.org/author/1892850"
          },
          {
            "authorId": "143881914",
            "name": "Javier Romero",
            "url": "https://www.semanticscholar.org/author/143881914"
          },
          {
            "authorId": "2635816",
            "name": "Gerard Pons-Moll",
            "url": "https://www.semanticscholar.org/author/2635816"
          },
          {
            "authorId": "2105795",
            "name": "Michael J. Black",
            "url": "https://www.semanticscholar.org/author/2105795"
          }
        ]
      ],
      "color": {
        "background": "rgba(-171.6, -168.6, -155.6, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 1,
      "label": "Microsoft COCO: Common Objects\nin Context",
      "level": 1,
      "size": 91.1943049661634,
      "title": 9131,
      "url": "https://www.semanticscholar.org/paper/71b7178df5d2b112d07e45038cb5637208659ff7",
      "velocity": 2466
    },
    {
      "abstract": "We present a conceptually simple, flexible, and general framework for object instance segmentation. Our approach efficiently detects objects in an image while simultaneously generating a high-quality segmentation mask for each instance. The method, called Mask R-CNN, extends Faster R-CNN by adding a branch for predicting an object mask in parallel with the existing branch for bounding box recognition. Mask R-CNN is simple to train and adds only a small overhead to Faster R-CNN, running at 5 fps. Moreover, Mask R-CNN is easy to generalize to other tasks, e.g., allowing us to estimate human poses in the same framework. We show top results in all three tracks of the COCO suite of challenges, including instance segmentation, bounding-box object detection, and person keypoint detection. Without bells and whistles, Mask R-CNN outperforms all existing, single-model entries on every task, including the COCO 2016 challenge winners. We hope our simple and effective approach will serve as a solid baseline and help ease future research in instance-level recognition. Code has been made available at: https://github.com/facebookresearch/Detectron.",
      "articletitle": [
        "DensePose: Dense Human Pose Estimation in the Wild",
        "Microsoft COCO: Common Objects in Context",
        "Mask R-CNN",
        "SMPL: a skinned multi-person linear model"
      ],
      "authors": [
        [
          {
            "authorId": "3616981",
            "name": "Riza Alp Güler",
            "url": "https://www.semanticscholar.org/author/3616981"
          },
          {
            "authorId": "2759569",
            "name": "Natalia Neverova",
            "url": "https://www.semanticscholar.org/author/2759569"
          },
          {
            "authorId": "2010660",
            "name": "Iasonas Kokkinos",
            "url": "https://www.semanticscholar.org/author/2010660"
          }
        ],
        [
          {
            "authorId": "33493200",
            "name": "Tsung-Yi Lin",
            "url": "https://www.semanticscholar.org/author/33493200"
          },
          {
            "authorId": "145854440",
            "name": "Michael Maire",
            "url": "https://www.semanticscholar.org/author/145854440"
          },
          {
            "authorId": "50172592",
            "name": "Serge J. Belongie",
            "url": "https://www.semanticscholar.org/author/50172592"
          },
          {
            "authorId": "48966748",
            "name": "James Hays",
            "url": "https://www.semanticscholar.org/author/48966748"
          },
          {
            "authorId": "1690922",
            "name": "Pietro Perona",
            "url": "https://www.semanticscholar.org/author/1690922"
          },
          {
            "authorId": "1770537",
            "name": "Deva Ramanan",
            "url": "https://www.semanticscholar.org/author/1770537"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "1699161",
            "name": "C. Lawrence Zitnick",
            "url": "https://www.semanticscholar.org/author/1699161"
          }
        ],
        [
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "2082991",
            "name": "Georgia Gkioxari",
            "url": "https://www.semanticscholar.org/author/2082991"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "2983898",
            "name": "Ross B. Girshick",
            "url": "https://www.semanticscholar.org/author/2983898"
          }
        ],
        [
          {
            "authorId": "2409115",
            "name": "Matthew Loper",
            "url": "https://www.semanticscholar.org/author/2409115"
          },
          {
            "authorId": "1892850",
            "name": "Naureen Mahmood",
            "url": "https://www.semanticscholar.org/author/1892850"
          },
          {
            "authorId": "143881914",
            "name": "Javier Romero",
            "url": "https://www.semanticscholar.org/author/143881914"
          },
          {
            "authorId": "2635816",
            "name": "Gerard Pons-Moll",
            "url": "https://www.semanticscholar.org/author/2635816"
          },
          {
            "authorId": "2105795",
            "name": "Michael J. Black",
            "url": "https://www.semanticscholar.org/author/2105795"
          }
        ]
      ],
      "color": {
        "background": "rgba(-5.400000000000006, -2.4000000000000057, 10.599999999999994, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 2,
      "label": "Mask R-CNN",
      "level": 1,
      "size": 78.0057265467065,
      "title": 2442,
      "url": "https://www.semanticscholar.org/paper/022dd244f2e25525eb37e9dda51abb9cd8ca8c30",
      "velocity": 804
    },
    {
      "abstract": "We present a learned model of human body shape and pose-dependent shape variation that is more accurate than previous models and is compatible with existing graphics pipelines. Our Skinned Multi-Person Linear model (SMPL) is a skinned vertex-based model that accurately represents a wide variety of body shapes in natural human poses. The parameters of the model are learned from data including the rest pose template, blend weights, pose-dependent blend shapes, identity-dependent blend shapes, and a regressor from vertices to joint locations. Unlike previous models, the pose-dependent blend shapes are a linear function of the elements of the pose rotation matrices. This simple formulation enables training the entire model from a relatively large number of aligned 3D meshes of different people in different poses. We quantitatively evaluate variants of SMPL using linear or dual-quaternion blend skinning and show that both are more accurate than a Blend-SCAPE model trained on the same data. We also extend SMPL to realistically model dynamic soft-tissue deformations. Because it is based on blend skinning, SMPL is compatible with existing rendering engines and we make it available for research purposes.",
      "articletitle": [
        "DensePose: Dense Human Pose Estimation in the Wild",
        "Microsoft COCO: Common Objects in Context",
        "Mask R-CNN",
        "SMPL: a skinned multi-person linear model"
      ],
      "authors": [
        [
          {
            "authorId": "3616981",
            "name": "Riza Alp Güler",
            "url": "https://www.semanticscholar.org/author/3616981"
          },
          {
            "authorId": "2759569",
            "name": "Natalia Neverova",
            "url": "https://www.semanticscholar.org/author/2759569"
          },
          {
            "authorId": "2010660",
            "name": "Iasonas Kokkinos",
            "url": "https://www.semanticscholar.org/author/2010660"
          }
        ],
        [
          {
            "authorId": "33493200",
            "name": "Tsung-Yi Lin",
            "url": "https://www.semanticscholar.org/author/33493200"
          },
          {
            "authorId": "145854440",
            "name": "Michael Maire",
            "url": "https://www.semanticscholar.org/author/145854440"
          },
          {
            "authorId": "50172592",
            "name": "Serge J. Belongie",
            "url": "https://www.semanticscholar.org/author/50172592"
          },
          {
            "authorId": "48966748",
            "name": "James Hays",
            "url": "https://www.semanticscholar.org/author/48966748"
          },
          {
            "authorId": "1690922",
            "name": "Pietro Perona",
            "url": "https://www.semanticscholar.org/author/1690922"
          },
          {
            "authorId": "1770537",
            "name": "Deva Ramanan",
            "url": "https://www.semanticscholar.org/author/1770537"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "1699161",
            "name": "C. Lawrence Zitnick",
            "url": "https://www.semanticscholar.org/author/1699161"
          }
        ],
        [
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "2082991",
            "name": "Georgia Gkioxari",
            "url": "https://www.semanticscholar.org/author/2082991"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "2983898",
            "name": "Ross B. Girshick",
            "url": "https://www.semanticscholar.org/author/2983898"
          }
        ],
        [
          {
            "authorId": "2409115",
            "name": "Matthew Loper",
            "url": "https://www.semanticscholar.org/author/2409115"
          },
          {
            "authorId": "1892850",
            "name": "Naureen Mahmood",
            "url": "https://www.semanticscholar.org/author/1892850"
          },
          {
            "authorId": "143881914",
            "name": "Javier Romero",
            "url": "https://www.semanticscholar.org/author/143881914"
          },
          {
            "authorId": "2635816",
            "name": "Gerard Pons-Moll",
            "url": "https://www.semanticscholar.org/author/2635816"
          },
          {
            "authorId": "2105795",
            "name": "Michael J. Black",
            "url": "https://www.semanticscholar.org/author/2105795"
          }
        ]
      ],
      "color": {
        "background": "rgba(58.6, 61.6, 74.6, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 3,
      "label": "SMPL: a skinned multi-person\nlinear model",
      "level": 1,
      "size": 63.491389913797974,
      "title": 572,
      "url": "https://www.semanticscholar.org/paper/32d3048a4fe4becc7c4638afd05f2354b631cfca",
      "velocity": 164
    },
    {
      "abstract": "We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest into the 1000 different classes. On the test data, we achieved top-1 and top-5 error rates of 37.5% and 17.0% which is considerably better than the previous state-of-the-art. The neural network, which has 60 million parameters and 650,000 neurons, consists of five convolutional layers, some of which are followed by max-pooling layers, and three fully-connected layers with a final 1000-way softmax. To make training faster, we used non-saturating neurons and a very efficient GPU implementation of the convolution operation. To reduce overriding in the fully-connected layers we employed a recently-developed regularization method called \"dropout\" that proved to be very effective. We also entered a variant of this model in the ILSVRC-2012 competition and achieved a winning top-5 test error rate of 15.3%, compared to 26.2% achieved by the second-best entry.",
      "articletitle": [
        "Microsoft COCO: Common Objects in Context",
        "ImageNet Classification with Deep Convolutional Neural Networks",
        "ImageNet Classification with Deep Convolutional Neural Networks",
        "ImageNet: A large-scale hierarchical image database"
      ],
      "authors": [
        [
          {
            "authorId": "33493200",
            "name": "Tsung-Yi Lin",
            "url": "https://www.semanticscholar.org/author/33493200"
          },
          {
            "authorId": "145854440",
            "name": "Michael Maire",
            "url": "https://www.semanticscholar.org/author/145854440"
          },
          {
            "authorId": "50172592",
            "name": "Serge J. Belongie",
            "url": "https://www.semanticscholar.org/author/50172592"
          },
          {
            "authorId": "48966748",
            "name": "James Hays",
            "url": "https://www.semanticscholar.org/author/48966748"
          },
          {
            "authorId": "1690922",
            "name": "Pietro Perona",
            "url": "https://www.semanticscholar.org/author/1690922"
          },
          {
            "authorId": "1770537",
            "name": "Deva Ramanan",
            "url": "https://www.semanticscholar.org/author/1770537"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "1699161",
            "name": "C. Lawrence Zitnick",
            "url": "https://www.semanticscholar.org/author/1699161"
          }
        ],
        [
          {
            "authorId": "2064160",
            "name": "Alex Krizhevsky",
            "url": "https://www.semanticscholar.org/author/2064160"
          },
          {
            "authorId": "1701686",
            "name": "Ilya Sutskever",
            "url": "https://www.semanticscholar.org/author/1701686"
          },
          {
            "authorId": "1695689",
            "name": "Geoffrey E. Hinton",
            "url": "https://www.semanticscholar.org/author/1695689"
          }
        ],
        [
          {
            "authorId": "2064160",
            "name": "Alex Krizhevsky",
            "url": "https://www.semanticscholar.org/author/2064160"
          },
          {
            "authorId": "1701686",
            "name": "Ilya Sutskever",
            "url": "https://www.semanticscholar.org/author/1701686"
          },
          {
            "authorId": "1695689",
            "name": "Geoffrey E. Hinton",
            "url": "https://www.semanticscholar.org/author/1695689"
          }
        ],
        [
          {
            "authorId": "153302678",
            "name": "Jia Deng",
            "url": "https://www.semanticscholar.org/author/153302678"
          },
          {
            "authorId": "47680287",
            "name": "Wenjun Dong",
            "url": "https://www.semanticscholar.org/author/47680287"
          },
          {
            "authorId": "2166511",
            "name": "Richard Socher",
            "url": "https://www.semanticscholar.org/author/2166511"
          },
          {
            "authorId": "33642044",
            "name": "Li-Jia Li",
            "url": "https://www.semanticscholar.org/author/33642044"
          },
          {
            "authorId": "94451829",
            "name": "Kai Li",
            "url": "https://www.semanticscholar.org/author/94451829"
          },
          {
            "authorId": "48004138",
            "name": "Li Fei-Fei",
            "url": "https://www.semanticscholar.org/author/48004138"
          }
        ]
      ],
      "color": {
        "background": "rgba(-1016.9000000000001, -1013.9000000000001, -1000.9000000000001, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 4,
      "label": "ImageNet Classification with\nDeep Convolutional Neural\nNetworks",
      "level": 2,
      "size": 92.09940291954844,
      "title": 9996,
      "url": "https://www.semanticscholar.org/paper/abd1c342495432171beb7ca8fd9551ef13cbd0ff",
      "velocity": 10919
    },
    {
      "abstract": "We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest into the 1000 different classes. On the test data, we achieved top-1 and top-5 error rates of 37.5% and 17.0% which is considerably better than the previous state-of-the-art. The neural network, which has 60 million parameters and 650,000 neurons, consists of five convolutional layers, some of which are followed by max-pooling layers, and three fully-connected layers with a final 1000-way softmax. To make training faster, we used non-saturating neurons and a very efficient GPU implementation of the convolution operation. To reduce overriding in the fully-connected layers we employed a recently-developed regularization method called \"dropout\" that proved to be very effective. We also entered a variant of this model in the ILSVRC-2012 competition and achieved a winning top-5 test error rate of 15.3%, compared to 26.2% achieved by the second-best entry.",
      "articletitle": [
        "Microsoft COCO: Common Objects in Context",
        "ImageNet Classification with Deep Convolutional Neural Networks",
        "ImageNet Classification with Deep Convolutional Neural Networks",
        "ImageNet: A large-scale hierarchical image database"
      ],
      "authors": [
        [
          {
            "authorId": "33493200",
            "name": "Tsung-Yi Lin",
            "url": "https://www.semanticscholar.org/author/33493200"
          },
          {
            "authorId": "145854440",
            "name": "Michael Maire",
            "url": "https://www.semanticscholar.org/author/145854440"
          },
          {
            "authorId": "50172592",
            "name": "Serge J. Belongie",
            "url": "https://www.semanticscholar.org/author/50172592"
          },
          {
            "authorId": "48966748",
            "name": "James Hays",
            "url": "https://www.semanticscholar.org/author/48966748"
          },
          {
            "authorId": "1690922",
            "name": "Pietro Perona",
            "url": "https://www.semanticscholar.org/author/1690922"
          },
          {
            "authorId": "1770537",
            "name": "Deva Ramanan",
            "url": "https://www.semanticscholar.org/author/1770537"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "1699161",
            "name": "C. Lawrence Zitnick",
            "url": "https://www.semanticscholar.org/author/1699161"
          }
        ],
        [
          {
            "authorId": "2064160",
            "name": "Alex Krizhevsky",
            "url": "https://www.semanticscholar.org/author/2064160"
          },
          {
            "authorId": "1701686",
            "name": "Ilya Sutskever",
            "url": "https://www.semanticscholar.org/author/1701686"
          },
          {
            "authorId": "1695689",
            "name": "Geoffrey E. Hinton",
            "url": "https://www.semanticscholar.org/author/1695689"
          }
        ],
        [
          {
            "authorId": "2064160",
            "name": "Alex Krizhevsky",
            "url": "https://www.semanticscholar.org/author/2064160"
          },
          {
            "authorId": "1701686",
            "name": "Ilya Sutskever",
            "url": "https://www.semanticscholar.org/author/1701686"
          },
          {
            "authorId": "1695689",
            "name": "Geoffrey E. Hinton",
            "url": "https://www.semanticscholar.org/author/1695689"
          }
        ],
        [
          {
            "authorId": "153302678",
            "name": "Jia Deng",
            "url": "https://www.semanticscholar.org/author/153302678"
          },
          {
            "authorId": "47680287",
            "name": "Wenjun Dong",
            "url": "https://www.semanticscholar.org/author/47680287"
          },
          {
            "authorId": "2166511",
            "name": "Richard Socher",
            "url": "https://www.semanticscholar.org/author/2166511"
          },
          {
            "authorId": "33642044",
            "name": "Li-Jia Li",
            "url": "https://www.semanticscholar.org/author/33642044"
          },
          {
            "authorId": "94451829",
            "name": "Kai Li",
            "url": "https://www.semanticscholar.org/author/94451829"
          },
          {
            "authorId": "48004138",
            "name": "Li Fei-Fei",
            "url": "https://www.semanticscholar.org/author/48004138"
          }
        ]
      ],
      "color": {
        "background": "rgba(-1016.9000000000001, -1013.9000000000001, -1000.9000000000001, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 5,
      "label": "ImageNet Classification with\nDeep Convolutional Neural\nNetworks",
      "level": 2,
      "size": 92.09940291954844,
      "title": 9996,
      "url": "https://www.semanticscholar.org/paper/abd1c342495432171beb7ca8fd9551ef13cbd0ff",
      "velocity": 10919
    },
    {
      "abstract": "The explosion of image data on the Internet has the potential to foster more sophisticated and robust models and algorithms to index, retrieve, organize and interact with images and multimedia data. But exactly how such data can be harnessed and organized remains a critical problem. We introduce here a new database called “ImageNet”, a large-scale ontology of images built upon the backbone of the WordNet structure. ImageNet aims to populate the majority of the 80,000 synsets of WordNet with an average of 500-1000 clean and full resolution images. This will result in tens of millions of annotated images organized by the semantic hierarchy of WordNet. This paper offers a detailed analysis of ImageNet in its current state: 12 subtrees with 5247 synsets and 3.2 million images in total. We show that ImageNet is much larger in scale and diversity and much more accurate than the current image datasets. Constructing such a large-scale database is a challenging task. We describe the data collection scheme with Amazon Mechanical Turk. Lastly, we illustrate the usefulness of ImageNet through three simple applications in object recognition, image classification and automatic object clustering. We hope that the scale, accuracy, diversity and hierarchical structure of ImageNet can offer unparalleled opportunities to researchers in the computer vision community and beyond.",
      "articletitle": [
        "Microsoft COCO: Common Objects in Context",
        "ImageNet Classification with Deep Convolutional Neural Networks",
        "ImageNet Classification with Deep Convolutional Neural Networks",
        "ImageNet: A large-scale hierarchical image database"
      ],
      "authors": [
        [
          {
            "authorId": "33493200",
            "name": "Tsung-Yi Lin",
            "url": "https://www.semanticscholar.org/author/33493200"
          },
          {
            "authorId": "145854440",
            "name": "Michael Maire",
            "url": "https://www.semanticscholar.org/author/145854440"
          },
          {
            "authorId": "50172592",
            "name": "Serge J. Belongie",
            "url": "https://www.semanticscholar.org/author/50172592"
          },
          {
            "authorId": "48966748",
            "name": "James Hays",
            "url": "https://www.semanticscholar.org/author/48966748"
          },
          {
            "authorId": "1690922",
            "name": "Pietro Perona",
            "url": "https://www.semanticscholar.org/author/1690922"
          },
          {
            "authorId": "1770537",
            "name": "Deva Ramanan",
            "url": "https://www.semanticscholar.org/author/1770537"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "1699161",
            "name": "C. Lawrence Zitnick",
            "url": "https://www.semanticscholar.org/author/1699161"
          }
        ],
        [
          {
            "authorId": "2064160",
            "name": "Alex Krizhevsky",
            "url": "https://www.semanticscholar.org/author/2064160"
          },
          {
            "authorId": "1701686",
            "name": "Ilya Sutskever",
            "url": "https://www.semanticscholar.org/author/1701686"
          },
          {
            "authorId": "1695689",
            "name": "Geoffrey E. Hinton",
            "url": "https://www.semanticscholar.org/author/1695689"
          }
        ],
        [
          {
            "authorId": "2064160",
            "name": "Alex Krizhevsky",
            "url": "https://www.semanticscholar.org/author/2064160"
          },
          {
            "authorId": "1701686",
            "name": "Ilya Sutskever",
            "url": "https://www.semanticscholar.org/author/1701686"
          },
          {
            "authorId": "1695689",
            "name": "Geoffrey E. Hinton",
            "url": "https://www.semanticscholar.org/author/1695689"
          }
        ],
        [
          {
            "authorId": "153302678",
            "name": "Jia Deng",
            "url": "https://www.semanticscholar.org/author/153302678"
          },
          {
            "authorId": "47680287",
            "name": "Wenjun Dong",
            "url": "https://www.semanticscholar.org/author/47680287"
          },
          {
            "authorId": "2166511",
            "name": "Richard Socher",
            "url": "https://www.semanticscholar.org/author/2166511"
          },
          {
            "authorId": "33642044",
            "name": "Li-Jia Li",
            "url": "https://www.semanticscholar.org/author/33642044"
          },
          {
            "authorId": "94451829",
            "name": "Kai Li",
            "url": "https://www.semanticscholar.org/author/94451829"
          },
          {
            "authorId": "48004138",
            "name": "Li Fei-Fei",
            "url": "https://www.semanticscholar.org/author/48004138"
          }
        ]
      ],
      "color": {
        "background": "rgba(-173.0, -170.0, -157.0, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 6,
      "label": "ImageNet: A large-scale\nhierarchical image database",
      "level": 2,
      "size": 92.08839245849916,
      "title": 9985,
      "url": "https://www.semanticscholar.org/paper/1b47265245e8db53a553049dcb27ed3e495fd625",
      "velocity": 2480
    },
    {
      "abstract": "We introduce the SCAPE method (Shape Completion and Animation for PEople)---a data-driven method for building a human shape model that spans variation in both subject shape and pose. The method is based on a representation that incorporates both articulated and non-rigid deformations. We learn a pose deformation model that derives the non-rigid surface deformation as a function of the pose of the articulated skeleton. We also learn a separate model of variation based on body shape. Our two models can be combined to produce 3D surface models with realistic muscle deformation for different people in different poses, when neither appear in the training set. We show how the model can be used for shape completion --- generating a complete surface mesh given a limited set of markers specifying the target shape. We present applications of shape completion to partial view completion and motion capture animation. In particular, our method is capable of constructing a high-quality animated surface model of a moving person, with realistic muscle deformation, using just a single static scan and a marker motion capture sequence of the person.",
      "articletitle": [
        "SMPL: a skinned multi-person linear model",
        "SCAPE: shape completion and animation of people",
        "Learning skeletons for shape and pose"
      ],
      "authors": [
        [
          {
            "authorId": "2409115",
            "name": "Matthew Loper",
            "url": "https://www.semanticscholar.org/author/2409115"
          },
          {
            "authorId": "1892850",
            "name": "Naureen Mahmood",
            "url": "https://www.semanticscholar.org/author/1892850"
          },
          {
            "authorId": "143881914",
            "name": "Javier Romero",
            "url": "https://www.semanticscholar.org/author/143881914"
          },
          {
            "authorId": "2635816",
            "name": "Gerard Pons-Moll",
            "url": "https://www.semanticscholar.org/author/2635816"
          },
          {
            "authorId": "2105795",
            "name": "Michael J. Black",
            "url": "https://www.semanticscholar.org/author/2105795"
          }
        ],
        [
          {
            "authorId": "1838674",
            "name": "Dragomir Anguelov",
            "url": "https://www.semanticscholar.org/author/1838674"
          },
          {
            "authorId": "2577358",
            "name": "Praveen Srinivasan",
            "url": "https://www.semanticscholar.org/author/2577358"
          },
          {
            "authorId": "1736370",
            "name": "Daphne Koller",
            "url": "https://www.semanticscholar.org/author/1736370"
          },
          {
            "authorId": "144867807",
            "name": "Sebastian Thrun",
            "url": "https://www.semanticscholar.org/author/144867807"
          },
          {
            "authorId": "33869638",
            "name": "Jim Rodgers",
            "url": "https://www.semanticscholar.org/author/33869638"
          },
          {
            "authorId": "49570777",
            "name": "James Davis",
            "url": "https://www.semanticscholar.org/author/49570777"
          }
        ],
        [
          {
            "authorId": "2735303",
            "name": "Nils Hasler",
            "url": "https://www.semanticscholar.org/author/2735303"
          },
          {
            "authorId": "2543070",
            "name": "Thorsten Thormählen",
            "url": "https://www.semanticscholar.org/author/2543070"
          },
          {
            "authorId": "1779035",
            "name": "Bodo Rosenhahn",
            "url": "https://www.semanticscholar.org/author/1779035"
          },
          {
            "authorId": "145156858",
            "name": "Hans-Peter Seidel",
            "url": "https://www.semanticscholar.org/author/145156858"
          }
        ]
      ],
      "color": {
        "background": "rgba(68.7, 71.7, 84.7, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 7,
      "label": "SCAPE: shape completion and\nanimation of people",
      "level": 2,
      "size": 65.53933404025811,
      "title": 702,
      "url": "https://www.semanticscholar.org/paper/5dc9f57a15091524210a84a59c415c6ab4e19c60",
      "velocity": 63
    },
    {
      "abstract": "In this paper a method for estimating a rigid skeleton, including skinning weights, skeleton connectivity, and joint positions, given a sparse set of example poses is presented. In contrast to other methods, we are able to simultaneously take examples of different subjects into account, which improves the robustness of the estimation. It is additionally possible to generate a skeleton that primarily describes variations in body shape instead of pose. The shape skeleton can then be combined with a regular pose varying skeleton. That way pose and body shape can be controlled simultaneously but separately. As this skeleton is technically still just a skinned rigid skeleton, compatibility with major modelling packages and game engines is retained. We further present an approach for synthesizing a suitable bind shape that additionally improves the accuracy of the generated model.",
      "articletitle": [
        "SMPL: a skinned multi-person linear model",
        "SCAPE: shape completion and animation of people",
        "Learning skeletons for shape and pose"
      ],
      "authors": [
        [
          {
            "authorId": "2409115",
            "name": "Matthew Loper",
            "url": "https://www.semanticscholar.org/author/2409115"
          },
          {
            "authorId": "1892850",
            "name": "Naureen Mahmood",
            "url": "https://www.semanticscholar.org/author/1892850"
          },
          {
            "authorId": "143881914",
            "name": "Javier Romero",
            "url": "https://www.semanticscholar.org/author/143881914"
          },
          {
            "authorId": "2635816",
            "name": "Gerard Pons-Moll",
            "url": "https://www.semanticscholar.org/author/2635816"
          },
          {
            "authorId": "2105795",
            "name": "Michael J. Black",
            "url": "https://www.semanticscholar.org/author/2105795"
          }
        ],
        [
          {
            "authorId": "1838674",
            "name": "Dragomir Anguelov",
            "url": "https://www.semanticscholar.org/author/1838674"
          },
          {
            "authorId": "2577358",
            "name": "Praveen Srinivasan",
            "url": "https://www.semanticscholar.org/author/2577358"
          },
          {
            "authorId": "1736370",
            "name": "Daphne Koller",
            "url": "https://www.semanticscholar.org/author/1736370"
          },
          {
            "authorId": "144867807",
            "name": "Sebastian Thrun",
            "url": "https://www.semanticscholar.org/author/144867807"
          },
          {
            "authorId": "33869638",
            "name": "Jim Rodgers",
            "url": "https://www.semanticscholar.org/author/33869638"
          },
          {
            "authorId": "49570777",
            "name": "James Davis",
            "url": "https://www.semanticscholar.org/author/49570777"
          }
        ],
        [
          {
            "authorId": "2735303",
            "name": "Nils Hasler",
            "url": "https://www.semanticscholar.org/author/2735303"
          },
          {
            "authorId": "2543070",
            "name": "Thorsten Thormählen",
            "url": "https://www.semanticscholar.org/author/2543070"
          },
          {
            "authorId": "1779035",
            "name": "Bodo Rosenhahn",
            "url": "https://www.semanticscholar.org/author/1779035"
          },
          {
            "authorId": "145156858",
            "name": "Hans-Peter Seidel",
            "url": "https://www.semanticscholar.org/author/145156858"
          }
        ]
      ],
      "color": {
        "background": "rgba(75.0, 78.0, 91.0, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 8,
      "label": "Learning skeletons for shape\nand pose",
      "level": 2,
      "size": 38.06662489770319,
      "title": 45,
      "url": "https://www.semanticscholar.org/paper/18cf5ac7e602cea7d743cbde9b66a6da6e1120dc",
      "velocity": 0
    },
    {
      "abstract": "The goal of this paper is to serve as a guide for selecting a detection architecture that achieves the right speed/memory/accuracy balance for a given application and platform. To this end, we investigate various ways to trade accuracy for speed and memory usage in modern convolutional object detection systems. A number of successful systems have been proposed in recent years, but apples-toapples comparisons are difficult due to different base feature extractors (e.g., VGG, Residual Networks), different default image resolutions, as well as different hardware and software platforms. We present a unified implementation of the Faster R-CNN [30], R-FCN [6] and SSD [25] systems, which we view as meta-architectures and trace out the speed/accuracy trade-off curve created by using alternative feature extractors and varying other critical parameters such as image size within each of these meta-architectures. On one extreme end of this spectrum where speed and memory are critical, we present a detector that achieves real time speeds and can be deployed on a mobile device. On the opposite end in which accuracy is critical, we present a detector that achieves state-of-the-art performance measured on the COCO detection task.",
      "articletitle": [
        "Mask R-CNN",
        "Speed/Accuracy Trade-Offs for Modern Convolutional Object Detectors",
        "Instance-Aware Semantic Segmentation via Multi-task Network Cascades",
        "Fully Convolutional Instance-Aware Semantic Segmentation"
      ],
      "authors": [
        [
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "2082991",
            "name": "Georgia Gkioxari",
            "url": "https://www.semanticscholar.org/author/2082991"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "2983898",
            "name": "Ross B. Girshick",
            "url": "https://www.semanticscholar.org/author/2983898"
          }
        ],
        [
          {
            "authorId": "4240351",
            "name": "Jonathan Huang",
            "url": "https://www.semanticscholar.org/author/4240351"
          },
          {
            "authorId": "40303375",
            "name": "Vivek Rathod",
            "url": "https://www.semanticscholar.org/author/40303375"
          },
          {
            "authorId": "145546535",
            "name": "Chen Sun",
            "url": "https://www.semanticscholar.org/author/145546535"
          },
          {
            "authorId": "2717876",
            "name": "Menglong Zhu",
            "url": "https://www.semanticscholar.org/author/2717876"
          },
          {
            "authorId": "34786378",
            "name": "Anoop Korattikara Balan",
            "url": "https://www.semanticscholar.org/author/34786378"
          },
          {
            "authorId": "50706340",
            "name": "Alireza Fathi",
            "url": "https://www.semanticscholar.org/author/50706340"
          },
          {
            "authorId": "33091759",
            "name": "Ian S. Fischer",
            "url": "https://www.semanticscholar.org/author/33091759"
          },
          {
            "authorId": "3282833",
            "name": "Zbigniew Wojna",
            "url": "https://www.semanticscholar.org/author/3282833"
          },
          {
            "authorId": "49992891",
            "name": "Yang Song",
            "url": "https://www.semanticscholar.org/author/49992891"
          },
          {
            "authorId": "1687120",
            "name": "Sergio Guadarrama",
            "url": "https://www.semanticscholar.org/author/1687120"
          },
          {
            "authorId": "145601650",
            "name": "Kevin Murphy",
            "url": "https://www.semanticscholar.org/author/145601650"
          }
        ],
        [
          {
            "authorId": "3304536",
            "name": "Jifeng Dai",
            "url": "https://www.semanticscholar.org/author/3304536"
          },
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": null,
            "name": "Jian Sun",
            "url": null
          }
        ],
        [
          {
            "authorId": "47001807",
            "name": "Yi Li",
            "url": "https://www.semanticscholar.org/author/47001807"
          },
          {
            "authorId": "7217794",
            "name": "Haozhi Qi",
            "url": "https://www.semanticscholar.org/author/7217794"
          },
          {
            "authorId": "3304536",
            "name": "Jifeng Dai",
            "url": "https://www.semanticscholar.org/author/3304536"
          },
          {
            "authorId": "7807689",
            "name": "Xiangyang Ji",
            "url": "https://www.semanticscholar.org/author/7807689"
          },
          {
            "authorId": "1732264",
            "name": "Yichen Wei",
            "url": "https://www.semanticscholar.org/author/1732264"
          }
        ]
      ],
      "color": {
        "background": "rgba(37.0, 40.0, 53.0, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 9,
      "label": "Speed/Accuracy Trade-Offs for\nModern Convolutional Object\nDetectors",
      "level": 2,
      "size": 71.18826249062079,
      "title": 1235,
      "url": "https://www.semanticscholar.org/paper/a312a573ef81793d56401e932ef6c9498791a3d1",
      "velocity": 380
    },
    {
      "abstract": "Semantic segmentation research has recently witnessed rapid progress, but many leading methods are unable to identify object instances. In this paper, we present Multitask Network Cascades for instance-aware semantic segmentation. Our model consists of three networks, respectively differentiating instances, estimating masks, and categorizing objects. These networks form a cascaded structure, and are designed to share their convolutional features. We develop an algorithm for the nontrivial end-to-end training of this causal, cascaded structure. Our solution is a clean, single-step training framework and can be generalized to cascades that have more stages. We demonstrate state-of-the-art instance-aware semantic segmentation accuracy on PASCAL VOC. Meanwhile, our method takes only 360ms testing an image using VGG-16, which is two orders of magnitude faster than previous systems for this challenging problem. As a by product, our method also achieves compelling object detection results which surpass the competitive Fast/Faster R-CNN systems. The method described in this paper is the foundation of our submissions to the MS COCO 2015 segmentation competition, where we won the 1st place.",
      "articletitle": [
        "Mask R-CNN",
        "Speed/Accuracy Trade-Offs for Modern Convolutional Object Detectors",
        "Instance-Aware Semantic Segmentation via Multi-task Network Cascades",
        "Fully Convolutional Instance-Aware Semantic Segmentation"
      ],
      "authors": [
        [
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "2082991",
            "name": "Georgia Gkioxari",
            "url": "https://www.semanticscholar.org/author/2082991"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "2983898",
            "name": "Ross B. Girshick",
            "url": "https://www.semanticscholar.org/author/2983898"
          }
        ],
        [
          {
            "authorId": "4240351",
            "name": "Jonathan Huang",
            "url": "https://www.semanticscholar.org/author/4240351"
          },
          {
            "authorId": "40303375",
            "name": "Vivek Rathod",
            "url": "https://www.semanticscholar.org/author/40303375"
          },
          {
            "authorId": "145546535",
            "name": "Chen Sun",
            "url": "https://www.semanticscholar.org/author/145546535"
          },
          {
            "authorId": "2717876",
            "name": "Menglong Zhu",
            "url": "https://www.semanticscholar.org/author/2717876"
          },
          {
            "authorId": "34786378",
            "name": "Anoop Korattikara Balan",
            "url": "https://www.semanticscholar.org/author/34786378"
          },
          {
            "authorId": "50706340",
            "name": "Alireza Fathi",
            "url": "https://www.semanticscholar.org/author/50706340"
          },
          {
            "authorId": "33091759",
            "name": "Ian S. Fischer",
            "url": "https://www.semanticscholar.org/author/33091759"
          },
          {
            "authorId": "3282833",
            "name": "Zbigniew Wojna",
            "url": "https://www.semanticscholar.org/author/3282833"
          },
          {
            "authorId": "49992891",
            "name": "Yang Song",
            "url": "https://www.semanticscholar.org/author/49992891"
          },
          {
            "authorId": "1687120",
            "name": "Sergio Guadarrama",
            "url": "https://www.semanticscholar.org/author/1687120"
          },
          {
            "authorId": "145601650",
            "name": "Kevin Murphy",
            "url": "https://www.semanticscholar.org/author/145601650"
          }
        ],
        [
          {
            "authorId": "3304536",
            "name": "Jifeng Dai",
            "url": "https://www.semanticscholar.org/author/3304536"
          },
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": null,
            "name": "Jian Sun",
            "url": null
          }
        ],
        [
          {
            "authorId": "47001807",
            "name": "Yi Li",
            "url": "https://www.semanticscholar.org/author/47001807"
          },
          {
            "authorId": "7217794",
            "name": "Haozhi Qi",
            "url": "https://www.semanticscholar.org/author/7217794"
          },
          {
            "authorId": "3304536",
            "name": "Jifeng Dai",
            "url": "https://www.semanticscholar.org/author/3304536"
          },
          {
            "authorId": "7807689",
            "name": "Xiangyang Ji",
            "url": "https://www.semanticscholar.org/author/7807689"
          },
          {
            "authorId": "1732264",
            "name": "Yichen Wei",
            "url": "https://www.semanticscholar.org/author/1732264"
          }
        ]
      ],
      "color": {
        "background": "rgba(58.6, 61.6, 74.6, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 10,
      "label": "Instance-Aware Semantic\nSegmentation via Multi-task\nNetwork Cascades",
      "level": 2,
      "size": 65.30877627725884,
      "title": 686,
      "url": "https://www.semanticscholar.org/paper/1e9b1f6061ef779e3ad0819c2832a29168eaeb9d",
      "velocity": 164
    },
    {
      "abstract": "We present the first fully convolutional end-to-end solution for instance-aware semantic segmentation task. It inherits all the merits of FCNs for semantic segmentation [29] and instance mask proposal [5]. It performs instance mask prediction and classification jointly. The underlying convolutional representation is fully shared between the two sub-tasks, as well as between all regions of interest. The network architecture is highly integrated and efficient. It achieves state-of-the-art performance in both accuracy and efficiency. It wins the COCO 2016 segmentation competition by a large margin. Code would be released at https://github.com/daijifeng001/TA-FCN.",
      "articletitle": [
        "Mask R-CNN",
        "Speed/Accuracy Trade-Offs for Modern Convolutional Object Detectors",
        "Instance-Aware Semantic Segmentation via Multi-task Network Cascades",
        "Fully Convolutional Instance-Aware Semantic Segmentation"
      ],
      "authors": [
        [
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "2082991",
            "name": "Georgia Gkioxari",
            "url": "https://www.semanticscholar.org/author/2082991"
          },
          {
            "authorId": "3127283",
            "name": "Piotr Dollár",
            "url": "https://www.semanticscholar.org/author/3127283"
          },
          {
            "authorId": "2983898",
            "name": "Ross B. Girshick",
            "url": "https://www.semanticscholar.org/author/2983898"
          }
        ],
        [
          {
            "authorId": "4240351",
            "name": "Jonathan Huang",
            "url": "https://www.semanticscholar.org/author/4240351"
          },
          {
            "authorId": "40303375",
            "name": "Vivek Rathod",
            "url": "https://www.semanticscholar.org/author/40303375"
          },
          {
            "authorId": "145546535",
            "name": "Chen Sun",
            "url": "https://www.semanticscholar.org/author/145546535"
          },
          {
            "authorId": "2717876",
            "name": "Menglong Zhu",
            "url": "https://www.semanticscholar.org/author/2717876"
          },
          {
            "authorId": "34786378",
            "name": "Anoop Korattikara Balan",
            "url": "https://www.semanticscholar.org/author/34786378"
          },
          {
            "authorId": "50706340",
            "name": "Alireza Fathi",
            "url": "https://www.semanticscholar.org/author/50706340"
          },
          {
            "authorId": "33091759",
            "name": "Ian S. Fischer",
            "url": "https://www.semanticscholar.org/author/33091759"
          },
          {
            "authorId": "3282833",
            "name": "Zbigniew Wojna",
            "url": "https://www.semanticscholar.org/author/3282833"
          },
          {
            "authorId": "49992891",
            "name": "Yang Song",
            "url": "https://www.semanticscholar.org/author/49992891"
          },
          {
            "authorId": "1687120",
            "name": "Sergio Guadarrama",
            "url": "https://www.semanticscholar.org/author/1687120"
          },
          {
            "authorId": "145601650",
            "name": "Kevin Murphy",
            "url": "https://www.semanticscholar.org/author/145601650"
          }
        ],
        [
          {
            "authorId": "3304536",
            "name": "Jifeng Dai",
            "url": "https://www.semanticscholar.org/author/3304536"
          },
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": null,
            "name": "Jian Sun",
            "url": null
          }
        ],
        [
          {
            "authorId": "47001807",
            "name": "Yi Li",
            "url": "https://www.semanticscholar.org/author/47001807"
          },
          {
            "authorId": "7217794",
            "name": "Haozhi Qi",
            "url": "https://www.semanticscholar.org/author/7217794"
          },
          {
            "authorId": "3304536",
            "name": "Jifeng Dai",
            "url": "https://www.semanticscholar.org/author/3304536"
          },
          {
            "authorId": "7807689",
            "name": "Xiangyang Ji",
            "url": "https://www.semanticscholar.org/author/7807689"
          },
          {
            "authorId": "1732264",
            "name": "Yichen Wei",
            "url": "https://www.semanticscholar.org/author/1732264"
          }
        ]
      ],
      "color": {
        "background": "rgba(62.1, 65.1, 78.1, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 11,
      "label": "Fully Convolutional Instance-\nAware Semantic Segmentation",
      "level": 2,
      "size": 60.61456918928017,
      "title": 429,
      "url": "https://www.semanticscholar.org/paper/0366b36006a6b37c673a42aad03ae77e8ef6ecda",
      "velocity": 129
    },
    {
      "abstract": "Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. On the ImageNet dataset we evaluate residual nets with a depth of up to 152 layers - 8× deeper than VGG nets [40] but still having lower complexity. An ensemble of these residual nets achieves 3.57% error on the ImageNet test set. This result won the 1st place on the ILSVRC 2015 classification task. We also present analysis on CIFAR-10 with 100 and 1000 layers. The depth of representations is of central importance for many visual recognition tasks. Solely due to our extremely deep representations, we obtain a 28% relative improvement on the COCO object detection dataset. Deep residual nets are foundations of our submissions to ILSVRC & COCO 2015 competitions1, where we also won the 1st places on the tasks of ImageNet detection, ImageNet localization, COCO detection, and COCO segmentation.",
      "articletitle": [
        "Speed/Accuracy Trade-Offs for Modern Convolutional Object Detectors",
        "Deep Residual Learning for Image Recognition",
        "Very Deep Convolutional Networks for Large-Scale Image Recognition",
        "Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks"
      ],
      "authors": [
        [
          {
            "authorId": "4240351",
            "name": "Jonathan Huang",
            "url": "https://www.semanticscholar.org/author/4240351"
          },
          {
            "authorId": "40303375",
            "name": "Vivek Rathod",
            "url": "https://www.semanticscholar.org/author/40303375"
          },
          {
            "authorId": "145546535",
            "name": "Chen Sun",
            "url": "https://www.semanticscholar.org/author/145546535"
          },
          {
            "authorId": "2717876",
            "name": "Menglong Zhu",
            "url": "https://www.semanticscholar.org/author/2717876"
          },
          {
            "authorId": "34786378",
            "name": "Anoop Korattikara Balan",
            "url": "https://www.semanticscholar.org/author/34786378"
          },
          {
            "authorId": "50706340",
            "name": "Alireza Fathi",
            "url": "https://www.semanticscholar.org/author/50706340"
          },
          {
            "authorId": "33091759",
            "name": "Ian S. Fischer",
            "url": "https://www.semanticscholar.org/author/33091759"
          },
          {
            "authorId": "3282833",
            "name": "Zbigniew Wojna",
            "url": "https://www.semanticscholar.org/author/3282833"
          },
          {
            "authorId": "49992891",
            "name": "Yang Song",
            "url": "https://www.semanticscholar.org/author/49992891"
          },
          {
            "authorId": "1687120",
            "name": "Sergio Guadarrama",
            "url": "https://www.semanticscholar.org/author/1687120"
          },
          {
            "authorId": "145601650",
            "name": "Kevin Murphy",
            "url": "https://www.semanticscholar.org/author/145601650"
          }
        ],
        [
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "1771551",
            "name": "Xiangyu Zhang",
            "url": "https://www.semanticscholar.org/author/1771551"
          },
          {
            "authorId": "3080683",
            "name": "Shaoqing Ren",
            "url": "https://www.semanticscholar.org/author/3080683"
          },
          {
            "authorId": null,
            "name": "Jian Sun",
            "url": null
          }
        ],
        [
          {
            "authorId": "34838386",
            "name": "Karen Simonyan",
            "url": "https://www.semanticscholar.org/author/34838386"
          },
          {
            "authorId": "1688869",
            "name": "Andrew Zisserman",
            "url": "https://www.semanticscholar.org/author/1688869"
          }
        ],
        [
          {
            "authorId": "3080683",
            "name": "Shaoqing Ren",
            "url": "https://www.semanticscholar.org/author/3080683"
          },
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "2983898",
            "name": "Ross B. Girshick",
            "url": "https://www.semanticscholar.org/author/2983898"
          },
          {
            "authorId": "144716314",
            "name": "Jian Sun",
            "url": "https://www.semanticscholar.org/author/144716314"
          }
        ]
      ],
      "color": {
        "background": "rgba(-1223.8, -1220.8, -1207.8, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 12,
      "label": "Deep Residual Learning for\nImage Recognition",
      "level": 3,
      "size": 92.093398716426,
      "title": 9990,
      "url": "https://www.semanticscholar.org/paper/2c03df8b48bf3fa39054345bafabfeff15bfd11d",
      "velocity": 12988
    },
    {
      "abstract": "In this work we investigate the effect of the convolutional network depth on its accuracy in the large-scale image recognition setting. Our main contribution is a thorough evaluation of networks of increasing depth using an architecture with very small (3x3) convolution filters, which shows that a significant improvement on the prior-art configurations can be achieved by pushing the depth to 16-19 weight layers. These findings were the basis of our ImageNet Challenge 2014 submission, where our team secured the first and the second places in the localisation and classification tracks respectively. We also show that our representations generalise well to other datasets, where they achieve state-of-the-art results. We have made our two best-performing ConvNet models publicly available to facilitate further research on the use of deep visual representations in computer vision.",
      "articletitle": [
        "Speed/Accuracy Trade-Offs for Modern Convolutional Object Detectors",
        "Deep Residual Learning for Image Recognition",
        "Very Deep Convolutional Networks for Large-Scale Image Recognition",
        "Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks"
      ],
      "authors": [
        [
          {
            "authorId": "4240351",
            "name": "Jonathan Huang",
            "url": "https://www.semanticscholar.org/author/4240351"
          },
          {
            "authorId": "40303375",
            "name": "Vivek Rathod",
            "url": "https://www.semanticscholar.org/author/40303375"
          },
          {
            "authorId": "145546535",
            "name": "Chen Sun",
            "url": "https://www.semanticscholar.org/author/145546535"
          },
          {
            "authorId": "2717876",
            "name": "Menglong Zhu",
            "url": "https://www.semanticscholar.org/author/2717876"
          },
          {
            "authorId": "34786378",
            "name": "Anoop Korattikara Balan",
            "url": "https://www.semanticscholar.org/author/34786378"
          },
          {
            "authorId": "50706340",
            "name": "Alireza Fathi",
            "url": "https://www.semanticscholar.org/author/50706340"
          },
          {
            "authorId": "33091759",
            "name": "Ian S. Fischer",
            "url": "https://www.semanticscholar.org/author/33091759"
          },
          {
            "authorId": "3282833",
            "name": "Zbigniew Wojna",
            "url": "https://www.semanticscholar.org/author/3282833"
          },
          {
            "authorId": "49992891",
            "name": "Yang Song",
            "url": "https://www.semanticscholar.org/author/49992891"
          },
          {
            "authorId": "1687120",
            "name": "Sergio Guadarrama",
            "url": "https://www.semanticscholar.org/author/1687120"
          },
          {
            "authorId": "145601650",
            "name": "Kevin Murphy",
            "url": "https://www.semanticscholar.org/author/145601650"
          }
        ],
        [
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "1771551",
            "name": "Xiangyu Zhang",
            "url": "https://www.semanticscholar.org/author/1771551"
          },
          {
            "authorId": "3080683",
            "name": "Shaoqing Ren",
            "url": "https://www.semanticscholar.org/author/3080683"
          },
          {
            "authorId": null,
            "name": "Jian Sun",
            "url": null
          }
        ],
        [
          {
            "authorId": "34838386",
            "name": "Karen Simonyan",
            "url": "https://www.semanticscholar.org/author/34838386"
          },
          {
            "authorId": "1688869",
            "name": "Andrew Zisserman",
            "url": "https://www.semanticscholar.org/author/1688869"
          }
        ],
        [
          {
            "authorId": "3080683",
            "name": "Shaoqing Ren",
            "url": "https://www.semanticscholar.org/author/3080683"
          },
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "2983898",
            "name": "Ross B. Girshick",
            "url": "https://www.semanticscholar.org/author/2983898"
          },
          {
            "authorId": "144716314",
            "name": "Jian Sun",
            "url": "https://www.semanticscholar.org/author/144716314"
          }
        ]
      ],
      "color": {
        "background": "rgba(-846.5, -843.5, -830.5, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 13,
      "label": "Very Deep Convolutional\nNetworks for Large-Scale Image\nRecognition",
      "level": 3,
      "size": 92.09439966733018,
      "title": 9991,
      "url": "https://www.semanticscholar.org/paper/eb42cf88027de515750f230b23b1a057dc782108",
      "velocity": 9215
    },
    {
      "abstract": "State-of-the-art object detection networks depend on region proposal algorithms to hypothesize object locations. Advances like SPPnet and Fast R-CNN have reduced the running time of these detection networks, exposing region proposal computation as a bottleneck. In this work, we introduce a Region Proposal Network (RPN) that shares full-image convolutional features with the detection network, thus enabling nearly cost-free region proposals. An RPN is a fully convolutional network that simultaneously predicts object bounds and objectness scores at each position. The RPN is trained end-to-end to generate high-quality region proposals, which are used by Fast R-CNN for detection. We further merge RPN and Fast R-CNN into a single network by sharing their convolutional features---using the recently popular terminology of neural networks with 'attention' mechanisms, the RPN component tells the unified network where to look. For the very deep VGG-16 model, our detection system has a frame rate of 5fps (including all steps) on a GPU, while achieving state-of-the-art object detection accuracy on PASCAL VOC 2007, 2012, and MS COCO datasets with only 300 proposals per image. In ILSVRC and COCO 2015 competitions, Faster R-CNN and RPN are the foundations of the 1st-place winning entries in several tracks. Code has been made publicly available",
      "articletitle": [
        "Speed/Accuracy Trade-Offs for Modern Convolutional Object Detectors",
        "Deep Residual Learning for Image Recognition",
        "Very Deep Convolutional Networks for Large-Scale Image Recognition",
        "Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks"
      ],
      "authors": [
        [
          {
            "authorId": "4240351",
            "name": "Jonathan Huang",
            "url": "https://www.semanticscholar.org/author/4240351"
          },
          {
            "authorId": "40303375",
            "name": "Vivek Rathod",
            "url": "https://www.semanticscholar.org/author/40303375"
          },
          {
            "authorId": "145546535",
            "name": "Chen Sun",
            "url": "https://www.semanticscholar.org/author/145546535"
          },
          {
            "authorId": "2717876",
            "name": "Menglong Zhu",
            "url": "https://www.semanticscholar.org/author/2717876"
          },
          {
            "authorId": "34786378",
            "name": "Anoop Korattikara Balan",
            "url": "https://www.semanticscholar.org/author/34786378"
          },
          {
            "authorId": "50706340",
            "name": "Alireza Fathi",
            "url": "https://www.semanticscholar.org/author/50706340"
          },
          {
            "authorId": "33091759",
            "name": "Ian S. Fischer",
            "url": "https://www.semanticscholar.org/author/33091759"
          },
          {
            "authorId": "3282833",
            "name": "Zbigniew Wojna",
            "url": "https://www.semanticscholar.org/author/3282833"
          },
          {
            "authorId": "49992891",
            "name": "Yang Song",
            "url": "https://www.semanticscholar.org/author/49992891"
          },
          {
            "authorId": "1687120",
            "name": "Sergio Guadarrama",
            "url": "https://www.semanticscholar.org/author/1687120"
          },
          {
            "authorId": "145601650",
            "name": "Kevin Murphy",
            "url": "https://www.semanticscholar.org/author/145601650"
          }
        ],
        [
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "1771551",
            "name": "Xiangyu Zhang",
            "url": "https://www.semanticscholar.org/author/1771551"
          },
          {
            "authorId": "3080683",
            "name": "Shaoqing Ren",
            "url": "https://www.semanticscholar.org/author/3080683"
          },
          {
            "authorId": null,
            "name": "Jian Sun",
            "url": null
          }
        ],
        [
          {
            "authorId": "34838386",
            "name": "Karen Simonyan",
            "url": "https://www.semanticscholar.org/author/34838386"
          },
          {
            "authorId": "1688869",
            "name": "Andrew Zisserman",
            "url": "https://www.semanticscholar.org/author/1688869"
          }
        ],
        [
          {
            "authorId": "3080683",
            "name": "Shaoqing Ren",
            "url": "https://www.semanticscholar.org/author/3080683"
          },
          {
            "authorId": "39353098",
            "name": "Kaiming He",
            "url": "https://www.semanticscholar.org/author/39353098"
          },
          {
            "authorId": "2983898",
            "name": "Ross B. Girshick",
            "url": "https://www.semanticscholar.org/author/2983898"
          },
          {
            "authorId": "144716314",
            "name": "Jian Sun",
            "url": "https://www.semanticscholar.org/author/144716314"
          }
        ]
      ],
      "color": {
        "background": "rgba(-388.7, -385.7, -372.7, 1)",
        "border": "rgba(25, 28, 41, 1)",
        "highlight": {
          "background": "rgba(155, 158, 171, 1)",
          "border": "rgba(25, 28, 41, 1)"
        }
      },
      "id": 14,
      "label": "Faster R-CNN: Towards Real-\nTime Object Detection with\nRegion Proposal Networks",
      "level": 3,
      "size": 92.09139651399664,
      "title": 9988,
      "url": "https://www.semanticscholar.org/paper/424561d8585ff8ebce7d5d07de8dbf7aae5e7270",
      "velocity": 4637
    }
  ]);

// create an array with edges
const edges = new DataSet([
  {
    "from": 0,
    "to": 1,
    "id": "d55850a0-8067-4b78-b226-3905f9919652"
  },
  {
    "from": 0,
    "to": 2,
    "id": "63bc2b7a-7b7c-4570-8caf-18690a718628"
  },
  {
    "from": 0,
    "to": 3,
    "id": "b692b92d-cae3-4f1a-835a-8c00097a18d2"
  },
  {
    "from": 1,
    "to": 4,
    "id": "845f837d-ed58-4f6c-8d25-6cbd8663c5e3"
  },
  {
    "from": 1,
    "to": 5,
    "id": "098aacb9-23a1-4a9f-a1ed-4c6a0dabf4b6"
  },
  {
    "from": 1,
    "to": 6,
    "id": "8ba43dbb-ba77-40c2-a606-1c9e2b7755ae"
  },
  {
    "from": 3,
    "to": 7,
    "id": "3fb91bab-3086-49dd-8fce-2f016d70618d"
  },
  {
    "from": 3,
    "to": 8,
    "id": "0983a64b-40bd-4094-8fe2-8b17db815805"
  },
  {
    "from": 2,
    "to": 9,
    "id": "0afa455a-badf-421b-a183-fb40f32856a7"
  },
  {
    "from": 2,
    "to": 10,
    "id": "450bd0d0-55bd-411b-b955-3e0999466bf4"
  },
  {
    "from": 2,
    "to": 11,
    "id": "fb04478d-5e27-4c6a-aa95-63b1587c14a6"
  },
  {
    "from": 9,
    "to": 12,
    "id": "0a822aa9-c3dc-48c5-9d84-ecb223b4af16"
  },
  {
    "from": 9,
    "to": 13,
    "id": "11d28b5b-a54b-40df-a269-9e269f4fc239"
  },
  {
    "from": 9,
    "to": 14,
    "id": "e7ff8acb-af3c-44b3-9898-2e3137dbf24a"
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
    levelSeparation: 250,
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
      menuOpen: false,
      onstart: true
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
    this.network.moveTo({scale:0.55})
    this.network.moveTo({position:{x:0, y:0}})
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

  close = () => this.setState({ onstart: false })
  open = () => this.setState({onstart: true})
  render() {
    var link = <a href='https://github.com/azhx/s2kg'>Github</a>;
    const wrap = (props) => {
      return (
      <div id="App">
        <Modal size = {'small'}dimmer = {'blurring'} open = {this.state.onstart} onClose={this.close} >
          <Modal.Header style = {{fontSize: "xx-large", fontWeight:900 }}>Welcome to S2KG</Modal.Header>
          <Modal.Description style ={{paddingLeft: 32, paddingRight:32, paddingTop:16, paddingBottom:16}}>
            <Header>What is this?</Header>
              <p>
                S2KG stands for Semantic Scholar Knowledge Graph. This
                tool was built by me (Alex Zhuang) to aid in my self-learning
                process when I wanted to dive into a completely new academic 
                discipline by reading literature first. I wanted a hierarchical overview
                of the most fundamental, influential, papers on a topic so I could
                decide on a place to start without missing anything.
              </p>
              <p>S2KG tries to meet this need.</p>
            <Header>Usage</Header>
              <p>
                Currently S2KG allows you to search papers by arxivID, Semantic Scholar
                Paper ID, or by doi directly. For each query, S2KG creates branches for the N most
                influential citations of the queried paper based on your selection of to the
                left of the search bar. Selecting "All" will create one branch for each reference
                of the paper as recorded in the Semantic Scholar database.
              </p>
              <p> Larger circles represent more citations and darker circles represent a higher citation velocity.
              </p>
              <p>Circles can be clicked to view the abstract of each paper in the sidebar.</p>
            <Header>Technology</Header>
            <p>
              This project has been left incomplete for now. So far, this app is built on React, Semantic UI, Vis.js, and Flask. It can be found 
              on {link}
            </p>
          </Modal.Description>
          <Modal.Actions style = {{background: 'black'}}>
            <Button labelPosition= 'right' style= {{fontWeight:900, fonSize:"medium", color:"white"}} onClick = {this.close}>OK</Button>
            </Modal.Actions>
        </Modal>
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
        <Button circular style = {{position: "absolute", right:"1.5%", bottom:"2vh", transform: "translate(-50%, -50%)"}}  icon = "info" borderRad onClick={this.open}></Button>
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
