# Easeplantz Frontend Service
<!-- MarkdownTOC levels="1,2,3" autolink="true"  -->
- [Introduction](#introduction)
- [Overview](#overview)
- [Demo](#demo)
- [List of Methods](#list-of-methods)
- [Implementation and Workflow Example for Frontend](#implementation-and-workflow-example-for-frontend)
- [Contributor](#contributor)
<!-- /MarkdownTOC -->

## Introduction
Easeplantz ia an application to predict plant diseases and give recommendation about treating the diseases. The prediction is specifically for Maize, Tomato, and Potato

Easeplantz Frontend Service is a frontend service based on React.JS to provide an API support for Easeplantz Android and Web Application.

This Frontend Service enables us to use instant prediction by uploading image using multipart/form-data type and responding with diseases and prediction accuracy rate.

The Frontend Service uses React.JS as the base for processing images and doing prediction using pre-trained models from the Easeplantz Machine Learning Engineers.

## Overview
This Frontend Service has three main service installed on it:

- **Upload Services**: Services for uploading images witj JPG format to server and storing it into the server.
- **Prediction Services**: Services that consuming pre-trained models to  predict plant diseases using tensorflow.js.
- **GET Services**: Services to list all predicted images and their prediction results.

## Demo 
The Demo for easeplantz, please vsit (https://www.easeplantz.ml/). To try the prediction feature please upload the plant diseases image in jpg format, any other format will not be supported.

## List of Methods
Here are the list of the endpoints and the usages of Easeplantz Backend Services:


## Implementation Example for The Frontend Service
In the Easeplantz Capstone Project, the Frontend is used to provide support for Android Application and Backend Web Application. To view the documentations about these services, please visit this link:

- [Android Application Repository](https://github.com/nfach98/easeplantz)
- [Bakc-end Web Application Repository](https://github.com/gerald-apm/node_tensorflow)

## Contributor
This Easeplantz Frontend Repository was a part of the Easeplantz Capstone Project from Bangkit Academy 2021 Program. Please welcome the contributors of this project:

- [A2842630 - Nino Fachrurozy](https://github.com/nfach98)
- [A0040244 - Eldhian Bimantaka Christianto](https://github.com/Eldhianbmntaka)
- [C1801846 - Sablina Damayanti](https://github.com/sablinadamayanti)
- [C1031406 - Geraldhi Aditya Putra Mahayadnya](https://github.com/gerald-apm)
- [M0040333 - Dympna Tinezsia Adhisti](https://github.com/dhiisti)
- [M0040318 - Mpu Hambyah Syah Bagaskara Aji](https://github.com/mpuhambyah)


Easeplantz Project 2021. All rights reserved.
