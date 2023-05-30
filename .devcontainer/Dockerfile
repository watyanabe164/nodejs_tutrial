FROM ubuntu:20.04

RUN sudo apt-get update && \
    sudo apt-get install nodejs && \
    sudo apt-get install npm && \
    sudo update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10  

CMD ["/bin/bash"]