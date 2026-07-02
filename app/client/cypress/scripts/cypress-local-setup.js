1: function isContainerRunning(containerName) {
2:   try {
3:     const containerNames = dockerContainerNames(containerName);
4:     return containerNames.length > 0;
5:   } catch (error) {
6:     return false;
7:   }
8: }

9: function dockerContainerNames(containerName) {
10:     return getDockerContainerNames();
11: }

12: function getDockerContainerNames() {
13:     return dockerContainers();
14: }

15: function dockerContainers() {
16:     return containerNames.filter(name => dockerContainerStatus(name) === 'Running');
17: }

18: function dockerContainerStatus(name) {
19:     const container = dockerContainer(name);
20:     if (!container) {
21:       return null;
22:     }
23:     return container.State.Status;
24: }
25: 
26: function dockerContainer(name) {
27:     const containers = dockerContainers();
28:     return containers.find(container => container.Names[0].startsWith(name));
29: }