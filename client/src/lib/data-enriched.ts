import { DockerTopic } from "./types";

export const enrichedData: Record<number, Partial<DockerTopic>> = {
  1: {
    longDescription: "Docker is an open-source platform that automates the deployment, scaling, and management of applications inside lightweight, portable containers. Unlike Virtual Machines (VMs) that require a full Guest OS for each instance, Docker containers share the host OS kernel, making them remarkably faster, lighter, and more efficient. This 'write once, run anywhere' capability ensures consistency across development, testing, and production environments. It solves the 'it works on my machine' problem by bundling code, runtime, system tools, libraries, and settings into a single package.",
    command: "docker --version",
    osSpecific: {
      linux: "On Linux, Docker runs natively using the host kernel features (cgroups, namespaces). Performance is native.",
      windows: "On Windows, Docker Desktop uses WSL2 (Windows Subsystem for Linux 2) to run a lightweight Linux VM that hosts the Docker daemon.",
      mac: "On macOS, Docker Desktop uses a lightweight Linux VM (via HyperKit or Apple Virtualization framework) to host the daemon."
    },
    examples: [
      { title: "Check Docker Version", code: "docker --version", description: "Verifies that the Docker CLI is installed and accessible in your path." },
      { title: "Check System Info", code: "docker info", description: "Displays detailed information about the Docker installation, including kernel version, number of containers/images, and storage driver." },
      { title: "Run Hello World", code: "docker run hello-world", description: "Downloads a test image and runs it in a container. If this works, your installation is correct." },
      { title: "List CLI Commands", code: "docker --help", description: "Shows a list of all available Docker commands and global options." },
      { title: "Check Compose Version", code: "docker compose version", description: "Verifies that Docker Compose (v2) is installed and available." },
      { title: "View Docker Root Dir", code: "docker info | grep 'Docker Root Dir'", description: "Finds where Docker stores its data (images, containers, volumes) on the host filesystem." },
      { title: "Check Server Version", code: "docker version --format '{{.Server.Version}}'", description: "Outputs only the version string of the Docker Daemon (Server)." },
      { title: "Check Client Version", code: "docker version --format '{{.Client.Version}}'", description: "Outputs only the version string of the Docker Client." },
      { title: "Debug Mode Check", code: "docker info --format '{{.Debug}}'", description: "Checks if the Docker daemon is running in debug mode (useful for troubleshooting)." },
      { title: "Check Registry Mirrors", code: "docker info --format '{{.RegistryConfig.Mirrors}}'", description: "Lists any configured registry mirrors (useful for corporate environments or speeding up pulls)." }
    ]
  },
  2: {
    longDescription: "Docker follows a client-server architecture. The **Docker Client** (CLI) communicates with the **Docker Daemon** (dockerd) via a REST API. The Daemon does the heavy lifting: building, running, and managing containers. **Docker Desktop** is a unified application for Mac and Windows that bundles the daemon, client, and GUI tools. Understanding this architecture is crucial for troubleshooting connectivity issues.",
    command: "docker info",
    osSpecific: {
      linux: "The daemon (dockerd) runs as a systemd service directly on the host.",
      windows: "The daemon runs inside the WSL2 utility VM.",
      mac: "The daemon runs inside the Linux VM managed by Docker Desktop."
    },
    examples: [
      { title: "View System Info", code: "docker info", description: "Detailed info about daemon status, storage drivers, and runtimes." },
      { title: "Check Socket (Linux/Mac)", code: "ls -l /var/run/docker.sock", description: "Verifies the Unix socket exists. The client uses this to talk to the daemon." },
      { title: "Connect to Remote Daemon", code: "export DOCKER_HOST=ssh://user@remote-host\ndocker ps", description: "Configures the local client to manage a remote Docker host via SSH." },
      { title: "Check Contexts", code: "docker context ls", description: "Lists available contexts. Contexts allow you to switch between different Docker endpoints (local, remote, cloud)." },
      { title: "Use Default Context", code: "docker context use default", description: "Switches back to the local Docker daemon." },
      { title: "Create Remote Context", code: "docker context create remote --docker \"host=ssh://user@server\"", description: "Saves a remote connection as a named context for easy switching." },
      { title: "Inspect Context", code: "docker context inspect default", description: "Shows low-level details about the default context configuration." },
      { title: "Check Daemon Status (Linux)", code: "systemctl status docker", description: "Checks if the systemd service for Docker is active and running." },
      { title: "Restart Daemon (Linux)", code: "sudo systemctl restart docker", description: "Restarts the Docker daemon. Useful if it becomes unresponsive." },
      { title: "View Daemon Logs (Linux)", code: "journalctl -u docker.service", description: "Reads the system logs for the Docker daemon to diagnose startup failures." }
    ]
  },
  3: {
    longDescription: "Installation methods vary by platform. **Docker Desktop** provides a complete visual dashboard and easy setup for Windows and Mac. **Docker Engine** is the bare-metal server installation for Linux distributions. Post-installation steps often involve managing user permissions so you don't have to run every command with 'sudo'.",
    command: "curl -fsSL https://get.docker.com -o get-docker.sh",
    osCommand: {
      linux: "curl -fsSL https://get.docker.com -o get-docker.sh\nsh get-docker.sh",
      windows: "winget install Docker.DockerDesktop",
      mac: "brew install --cask docker"
    },
    osSpecific: {
      linux: "Install using the official convenience script or via repository (apt/yum). Post-install: 'sudo usermod -aG docker $USER' to run without sudo.",
      windows: "Download the Docker Desktop Installer.exe. Ensure WSL2 feature is enabled in Windows Features.",
      mac: "Download Docker.dmg (Intel or Apple Silicon). Drag to Applications folder."
    },
    examples: [
      { title: "Linux Auto-Install", code: "curl -fsSL https://get.docker.com -o get-docker.sh\nsh get-docker.sh", description: "Quickest way to install on fresh Linux servers (Ubuntu, Debian, CentOS)." },
      { title: "Add User to Group (Linux)", code: "sudo usermod -aG docker $USER", description: "Grants the current user permission to access the Docker socket without sudo." },
      { title: "Apply Group Changes", code: "newgrp docker", description: "Refreshes group membership immediately without logging out." },
      { title: "Verify sudo-less Access", code: "docker run hello-world", description: "Tests if you can run commands as a non-root user." },
      { title: "Install via Apt (Ubuntu)", code: "sudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io", description: "Manual installation method for production stability." },
      { title: "Enable on Boot (Linux)", code: "sudo systemctl enable docker", description: "Ensures Docker starts automatically when the server reboots." },
      { title: "Uninstall (Ubuntu)", code: "sudo apt-get purge docker-ce docker-ce-cli containerd.io", description: "Removes Docker packages." },
      { title: "Cleanup After Uninstall", code: "sudo rm -rf /var/lib/docker", description: "Deletes all images, containers, and volumes after uninstalling." },
      { title: "Check WSL Version (Win)", code: "wsl --list --verbose", description: "Verifies that you have WSL 2 distros installed for Docker Desktop backend." },
      { title: "Update WSL (Win)", code: "wsl --update", description: "Ensures the Linux kernel for Windows is up to date." }
    ]
  },
  4: {
    longDescription: "Docker Hub is the world's largest library and community for container images. It serves as the default public registry. You can find official images (maintained by Docker), verified publisher images, and community images. It's where 'docker pull' looks by default if no registry URL is specified.",
    command: "docker login",
    examples: [
      { title: "Search Images", code: "docker search nginx", description: "Searches the public registry for images matching 'nginx'." },
      { title: "Filter Search (Official)", code: "docker search --filter \"is-official=true\" python", description: "Finds only official Python images maintained by the library authors." },
      { title: "Filter Search (Stars)", code: "docker search --filter \"stars=100\" node", description: "Finds Node.js images with at least 100 stars." },
      { title: "Login to Hub", code: "docker login", description: "Interactively logs you in. Credentials are saved to ~/.docker/config.json." },
      { title: "Login Non-Interactive", code: "echo $PASSWORD | docker login -u myuser --password-stdin", description: "Secure login for scripts/CI without exposing password in history." },
      { title: "Logout", code: "docker logout", description: "Removes cached credentials." },
      { title: "Pull Official Image", code: "docker pull alpine", description: "Downloads the latest 'alpine' image from the official library." },
      { title: "Pull User Image", code: "docker pull myuser/myrepo:tag", description: "Downloads an image from a specific user's repository." },
      { title: "Inspect Auth Config", code: "cat ~/.docker/config.json", description: "View the current authentication configuration (auth tokens are base64 encoded)." },
      { title: "Search with Limit", code: "docker search --limit 5 mysql", description: "Shows only the top 5 search results." }
    ]
  },
  5: {
    longDescription: "An **Image** is a read-only template with instructions for creating a Docker container. A **Container** is a runnable instance of an image. You can think of an Image as a 'Class' and a Container as an 'Object' instance in programming terms. Images are immutable; Containers add a writable layer on top. Understanding this distinction is fundamental.",
    command: "docker run -it ubuntu bash",
    examples: [
      { title: "List Images", code: "docker images", description: "Shows the static templates available locally." },
      { title: "List Containers", code: "docker ps", description: "Shows the running instances of those templates." },
      { title: "Start Container", code: "docker run -d nginx", description: "Creates a running instance (container) from the 'nginx' template (image)." },
      { title: "Create Another Instance", code: "docker run -d nginx", description: "Creates a *second* independent container from the same image." },
      { title: "Commit Changes", code: "docker commit <container_id> my-new-image", description: "Freezes a container's current state into a new immutable image." },
      { title: "Show Writable Layer", code: "docker diff <container_id>", description: "Lists files changed in the container's writable layer compared to the base image." },
      { title: "Remove Container", code: "docker rm <container_id>", description: "Deletes the instance. The image remains untouched." },
      { title: "Remove Image", code: "docker rmi <image_id>", description: "Deletes the template. Fails if any containers are based on it." },
      { title: "Export Container", code: "docker export <container_id> > archive.tar", description: "Saves the container's filesystem as a flat tarball (loses history)." },
      { title: "Import Image", code: "cat archive.tar | docker import - my-image:imported", description: "Creates a new filesystem image from a tarball." }
    ]
  },
  6: {
    longDescription: "Pulling an image downloads the filesystem layers and metadata from a registry. If the tag is omitted, Docker defaults to 'latest'. Pulling is bandwidth-intensive, so caching is critical. Docker checks if layers already exist locally (by hash) and skips downloading them.",
    command: "docker pull <image>:<tag>",
    examples: [
      { title: "Pull Latest", code: "docker pull ubuntu", description: "Downloads 'ubuntu:latest'." },
      { title: "Pull Specific Version", code: "docker pull node:18-alpine", description: "Downloads a specific version tag. Recommended for production." },
      { title: "Pull by Digest", code: "docker pull ubuntu@sha256:45b23dee08...", description: "Downloads an exact immutable content hash. Securest method." },
      { title: "Pull All Tags", code: "docker pull -a myrepo/myimage", description: "Downloads EVERY tag for the repository. Use with caution!" },
      { title: "Pull Private Image", code: "docker pull myregistry.com/app:v1", description: "Pull from a custom/private registry URL." },
      { title: "Dry Run (Scout)", code: "docker scout quickview nginx", description: "Check image details without fully pulling (using Docker Scout)." },
      { title: "Check Pull Progress", code: "docker pull postgres", description: "Watch the layer-by-layer download progress bars." },
      { title: "Force Re-pull", code: "docker pull --platform linux/amd64 nginx", description: "Pull specific platform architecture even if another exists." },
      { title: "Verify Image locally", code: "docker image inspect nginx:latest", description: "Check details of the pulled image." },
      { title: "Search before Pull", code: "docker search alpine", description: "Verify the exact name of the image before pulling." }
    ]
  },
  7: {
    longDescription: "Images accumulate over time. 'docker images' lists them. 'docker rmi' removes them. Dangling images (labeled <none>) are intermediate layers that are no longer referenced by any tagged image. Pruning these is a common maintenance task.",
    command: "docker images",
    examples: [
      { title: "List All Images", code: "docker images -a", description: "Shows all images, including intermediate layers." },
      { title: "List by Size", code: "docker images --format \"{{.Size}}\t{{.Repository}}\" | sort -h", description: "Lists images sorted by size." },
      { title: "Filter Dangling", code: "docker images -f \"dangling=true\"", description: "Shows only untagged/dangling images that can be safely removed." },
      { title: "Remove Image", code: "docker rmi nginx", description: "Removes the nginx image." },
      { title: "Remove by ID", code: "docker rmi 7d9495d03763", description: "Removes an image by its short ID." },
      { title: "Force Remove", code: "docker rmi -f nginx", description: "Forces removal even if a container is using it (not recommended)." },
      { title: "Prune Dangling", code: "docker image prune", description: "Deletes all dangling images to free space." },
      { title: "Prune All Unused", code: "docker image prune -a", description: "Deletes ALL images not currently used by a running container." },
      { title: "Remove Multiple", code: "docker rmi image1 image2 image3", description: "Delete multiple images at once." },
      { title: "Remove by Pattern", code: "docker rmi $(docker images -q 'myproject*')", description: "Advanced: Removes all images matching a name pattern." }
    ]
  },
  8: {
    longDescription: "A Docker image is built up from a series of layers. Each instruction in a Dockerfile creates a layer. Layers are stacked and read-only. When you create a new container, you add a new writable layer on top of the underlying layers. This architecture allows images to share layers, significantly reducing storage usage and transfer times.",
    command: "docker history <image>",
    examples: [
      { title: "View History", code: "docker history nginx:latest", description: "Shows the layers, commands, and size of each layer." },
      { title: "History No-Trunc", code: "docker history --no-trunc nginx", description: "Shows the full commands that created each layer." },
      { title: "Inspect Layers", code: "docker inspect --format='{{.RootFS.Layers}}' nginx", description: "Lists the sha256 hashes of the filesystem layers." },
      { title: "Check Layer Size", code: "docker history --human --format \"{{.CreatedBy}}: {{.Size}}\" nginx", description: "Focuses on which commands added the most size." },
      { title: "Analyze with Dive", code: "docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock wagoodman/dive:latest nginx", description: "Uses the 'dive' tool to visually inspect layer contents." },
      { title: "Compare Images", code: "docker inspect image1 image2", description: "Check if two images share the same layer hashes." },
      { title: "Flatten Image", code: "docker export container | docker import - flat-image", description: "Merges all layers into one (loses history, good for distribution)." },
      { title: "Save Image Layers", code: "docker save nginx -o nginx.tar", description: "Exports the full image with all layers to a file." },
      { title: "Inspect Manifest", code: "docker manifest inspect nginx", description: "View the multi-arch manifest list for an image." },
      { title: "Count Layers", code: "docker history -q nginx | wc -l", description: "Counts how many layers make up the image." }
    ]
  },
  9: {
    longDescription: "Docker uses a build cache to speed up image creation. If an instruction and its parent layers haven't changed, Docker reuses the cached layer. Optimizing your Dockerfile order (putting frequently changed files last) maximizes cache hits. This is the #1 way to speed up CI/CD pipelines.",
    command: "docker build .",
    examples: [
      { title: "Build with Cache", code: "docker build -t myapp .", description: "Standard build uses cache automatically." },
      { title: "Force No Cache", code: "docker build --no-cache -t myapp .", description: "Forces a full rebuild from scratch." },
      { title: "Pull Fresh Base", code: "docker build --pull -t myapp .", description: "Checks registry for updates to the FROM image even if cached locally." },
      { title: "Cache From Image", code: "docker build --cache-from myapp:latest .", description: "Uses a pulled image as a cache source (great for CI)." },
      { title: "Build Specific Target", code: "docker build --target builder .", description: "Builds only up to a specific stage in a multi-stage Dockerfile." },
      { title: "Pass Build Args", code: "docker build --build-arg VERSION=1.0 .", description: "Passes variables that might invalidate cache." },
      { title: "Output Build Log", code: "docker build --progress=plain .", description: "Shows full build output instead of the interactive UI." },
      { title: "Prune Build Cache", code: "docker builder prune", description: "Clears the build cache to free disk space." },
      { title: "Check Cache Size", code: "docker system df", description: "Shows how much space the build cache is consuming." },
      { title: "BuildKit Cache", code: "DOCKER_BUILDKIT=1 docker build .", description: "Ensures the modern BuildKit engine is used for better caching." }
    ]
  },
  10: {
    longDescription: "Tags are mutable references to specific image versions. 'latest' is just a convention, not technical magic. Semantic versioning (e.g., 1.0.0, 1.0, 1) is best practice. One image ID can have multiple tags pointing to it.",
    command: "docker tag <source> <target>",
    examples: [
      { title: "Create Tag", code: "docker tag myapp:latest myapp:v1", description: "Adds the 'v1' alias to the 'latest' image." },
      { title: "Retag for Registry", code: "docker tag myapp:v1 myuser/myapp:v1", description: "Prepares an image for pushing to Docker Hub." },
      { title: "Tag Private Registry", code: "docker tag nginx localhost:5000/mynginx", description: "Tags for a local private registry." },
      { title: "Move Latest Tag", code: "docker tag myapp:v2 myapp:latest", description: "Updates the 'latest' pointer to the new v2 image." },
      { title: "Remove Tag", code: "docker rmi myapp:v1", description: "Untags the image. The image data is only deleted if this was the last tag." },
      { title: "Inspect Tags", code: "docker inspect myapp:latest", description: "See RepoTags in the JSON output." },
      { title: "Tag by ID", code: "docker tag 5d3c8a9e2f1 my-local-build:dev", description: "Give a name to an unnamed (ID-only) image." },
      { title: "Date-based Tag", code: "docker tag app app:$(date +%Y%m%d)", description: "Scripting example: tag with today's date." },
      { title: "Git Commit Tag", code: "docker tag app app:git-$(git rev-parse --short HEAD)", description: "Scripting example: tag with Git commit hash." },
      { title: "Major/Minor Tags", code: "docker tag app:1.2.3 app:1.2 && docker tag app:1.2 app:1", description: "Creating SemVer aliases." }
    ]
  },
  11: {
    longDescription: "Pushing uploads your local image layers to a registry (like Docker Hub). You must be authenticated. Only layers that don't exist on the registry are uploaded.",
    command: "docker push <image>",
    examples: [
      { title: "Push to Hub", code: "docker push myuser/myrepo:tag", description: "Uploads the specific tag to Docker Hub." },
      { title: "Push All Tags", code: "docker push -a myuser/myrepo", description: "Uploads all local tags for that repo." },
      { title: "Push to Private", code: "docker push registry.example.com/app:v1", description: "Uploads to a private registry." },
      { title: "Push to AWS ECR", code: "docker push 12345.dkr.ecr.region.amazonaws.com/app:v1", description: "Uploads to Amazon ECR (requires login first)." },
      { title: "Login and Push", code: "docker login && docker push myuser/app", description: "Standard workflow." },
      { title: "Quiet Push", code: "docker push -q myapp", description: "Suppresses progress bars (good for logs)." },
      { title: "Verify Push", code: "docker manifest inspect myuser/myrepo:tag", description: "Checks if the remote registry has the image info." },
      { title: "Push Multi-Arch", code: "docker buildx build --platform linux/amd64,linux/arm64 --push -t app:latest .", description: "Builds and pushes a multi-architecture manifest in one go." },
      { title: "Trust Sign Push", code: "DOCKER_CONTENT_TRUST=1 docker push myapp", description: "Signs the image with Notary before pushing." },
      { title: "Retry Push", code: "docker push myapp || docker push myapp", description: "Simple retry logic for flaky networks." }
    ]
  },
  12: {
    longDescription: "'docker inspect' returns low-level information on Docker objects (images, containers, volumes) in JSON format. It's the ultimate source of truth for configuration. You can filter the JSON output using Go templates with the --format flag.",
    command: "docker inspect <object>",
    examples: [
      { title: "Full JSON", code: "docker inspect nginx", description: "Dumps the entire configuration JSON." },
      { title: "Get IP Address", code: "docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' my-container", description: "Extracts just the IP address." },
      { title: "Get Environment", code: "docker inspect -f '{{.Config.Env}}' my-container", description: "Lists environment variables." },
      { title: "Get Mounts", code: "docker inspect -f '{{json .Mounts}}' my-container", description: "Shows mounted volumes as JSON." },
      { title: "Get Image ID", code: "docker inspect -f '{{.Image}}' my-container", description: "Shows which image ID the container uses." },
      { title: "Get State", code: "docker inspect -f '{{.State.Status}}' my-container", description: "Returns 'running', 'exited', etc." },
      { title: "Get Exit Code", code: "docker inspect -f '{{.State.ExitCode}}' my-container", description: "Useful for checking if a stopped container failed." },
      { title: "Get Log Path", code: "docker inspect -f '{{.LogPath}}' my-container", description: "Finds where the JSON logs are stored on disk." },
      { title: "Inspect Volume", code: "docker volume inspect my-vol", description: "Shows volume mount point and driver." },
      { title: "Inspect Network", code: "docker network inspect bridge", description: "Shows connected containers and subnet config." }
    ]
  },
  13: {
    longDescription: "'docker run' is the most used command. It creates a new container layer over the specified image and starts it. You can define networking, storage, environment variables, and resource limits at runtime. It essentially combines 'docker create' and 'docker start'.",
    command: "docker run [OPTIONS] IMAGE [COMMAND]",
    osCommand: {
      linux: "docker run -d -p 80:80 --name webserver nginx",
      windows: "docker run -d -p 80:80 --name webserver nginx\n# Note: Use PowerShell or WSL2",
      mac: "docker run -d -p 80:80 --name webserver nginx"
    },
    examples: [
      { title: "Detached Mode", code: "docker run -d --name my-server nginx", description: "Run in background (-d). Returns container ID." },
      { title: "Interactive Shell", code: "docker run -it ubuntu bash", description: "Keep input open (-i) and allocate tty (-t). Drops you into prompt." },
      { title: "Cleanup on Exit", code: "docker run --rm alpine echo 'hello'", description: "Automatically removes container when it stops." },
      { title: "Map Ports", code: "docker run -p 8080:80 nginx", description: "Maps host port 8080 to container port 80." },
      { title: "Environment Vars", code: "docker run -e MY_VAR=hello alpine env", description: "Injects environment variable." },
      { title: "Mount Volume", code: "docker run -v $(pwd):/app node", description: "Bind mounts current directory to /app." },
      { title: "Set Workdir", code: "docker run -w /app node npm start", description: "Sets working directory for the command." },
      { title: "Set User", code: "docker run -u 1000:1000 ubuntu id", description: "Runs as specific user ID to avoid root issues." },
      { title: "Network Connect", code: "docker run --network my-net nginx", description: "Attaches to a custom network." },
      { title: "Limit Resources", code: "docker run --cpus=0.5 --memory=100m nginx", description: "Limits CPU and RAM usage." }
    ]
  },
  14: {
    longDescription: "List containers to see what's running. 'docker ps' shows running containers. 'docker ps -a' shows all containers, including stopped ones. The output includes ID, Image, Command, Created Time, Status, Ports, and Names.",
    command: "docker ps",
    examples: [
      { title: "List Running", code: "docker ps", description: "Default command. Shows only active containers." },
      { title: "List All", code: "docker ps -a", description: "Shows active AND stopped/exited containers." },
      { title: "List IDs Only", code: "docker ps -q", description: "Returns only IDs. Great for piping to other commands." },
      { title: "Show Size", code: "docker ps -s", description: "Adds a column showing disk space used by container." },
      { title: "Custom Format", code: "docker ps --format \"table {{.ID}}\\t{{.Names}}\\t{{.Status}}\"", description: "Clean tabular output with specific columns." },
      { title: "Filter by Name", code: "docker ps -f \"name=web\"", description: "Finds containers with 'web' in name." },
      { title: "Filter by Status", code: "docker ps -f \"status=exited\"", description: "Finds all stopped containers." },
      { title: "Filter by Label", code: "docker ps -f \"label=env=prod\"", description: "Finds containers with specific metadata labels." },
      { title: "Last Created", code: "docker ps -l", description: "Shows the most recently created container." },
      { title: "No Truncate", code: "docker ps --no-trunc", description: "Shows full command and full ID without cutting text." }
    ]
  },
  15: {
    longDescription: "Manage container lifecycle. 'start' resumes a stopped container. 'stop' sends SIGTERM (graceful shutdown) then SIGKILL. 'kill' sends SIGKILL immediately. 'restart' is a convenient stop-then-start.",
    command: "docker stop <container>",
    examples: [
      { title: "Stop Container", code: "docker stop my-container", description: "Sends SIGTERM. Waits 10s then kills if not stopped." },
      { title: "Start Container", code: "docker start my-container", description: "Resumes a stopped container state." },
      { title: "Restart Container", code: "docker restart my-container", description: "Stops and starts. Useful after config changes." },
      { title: "Force Kill", code: "docker kill my-container", description: "Immediate shutdown. Data in memory may be lost." },
      { title: "Stop with Timeout", code: "docker stop -t 30 my-container", description: "Waits 30 seconds before forcing kill." },
      { title: "Start Interactive", code: "docker start -ai my-container", description: "Starts and immediately attaches console." },
      { title: "Pause Container", code: "docker pause my-container", description: "Freezes all processes. RAM is kept but CPU released." },
      { title: "Unpause Container", code: "docker unpause my-container", description: "Unfreezes processes." },
      { title: "Wait for Stop", code: "docker wait my-container", description: "Blocks until container stops, then prints exit code." },
      { title: "Stop All", code: "docker stop $(docker ps -q)", description: "Stops every running container." }
    ]
  },
  16: {
    longDescription: "Remove containers to free up names and disk space. You cannot remove a running container unless you force it with '-f'. 'docker container prune' removes all stopped containers. Always valid to remove stopped containers.",
    command: "docker rm <container>",
    examples: [
      { title: "Remove Container", code: "docker rm my-container", description: "Deletes a stopped container." },
      { title: "Force Remove", code: "docker rm -f my-container", description: "Kills and deletes a running container." },
      { title: "Remove and Volumes", code: "docker rm -v my-container", description: "Removes container AND its anonymous volumes." },
      { title: "Prune All Stopped", code: "docker container prune", description: "Bulk delete all stopped containers." },
      { title: "Remove by ID", code: "docker rm 3a09b2", description: "Short ID works too." },
      { title: "Remove Multiple", code: "docker rm c1 c2 c3", description: "Remove list of containers." },
      { title: "Remove Filtered", code: "docker rm $(docker ps -a -q -f status=exited)", description: "Script to clean up only exited containers." },
      { title: "Remove and Link", code: "docker rm --link /webapp/db", description: "Remove the specified link (legacy networking)." },
      { title: "Check before Remove", code: "docker ps -a", description: "Always check what you are about to delete." },
      { title: "Force Prune", code: "docker container prune -f", description: "Skip confirmation prompt." }
    ]
  },
  17: {
    longDescription: "View the STDOUT and STDERR streams of a container. Essential for debugging application errors. Use '-f' to follow the logs in real-time like 'tail -f'. By default, uses the 'json-file' logging driver.",
    command: "docker logs <container>",
    examples: [
      { title: "Show Logs", code: "docker logs my-app", description: "Dumps all buffered logs." },
      { title: "Follow Logs", code: "docker logs -f my-app", description: "Stream logs in real-time (Ctrl+C to exit)." },
      { title: "Tail Logs", code: "docker logs --tail 10 my-app", description: "Show only the last 10 lines." },
      { title: "Show Timestamps", code: "docker logs -t my-app", description: "Adds time prefix to every line." },
      { title: "Filter by Time", code: "docker logs --since 30m my-app", description: "Show logs from last 30 minutes." },
      { title: "Specific Date", code: "docker logs --until 2023-01-01T00:00:00 my-app", description: "Show logs up to a timestamp." },
      { title: "Show Details", code: "docker logs --details my-app", description: "Show extra details provided to logs." },
      { title: "Combined Options", code: "docker logs -f --tail 100 -t my-app", description: "Common debugging pattern." },
      { title: "Grep Logs", code: "docker logs my-app 2>&1 | grep Error", description: "Pipe output to find specific errors." },
      { title: "Log Driver Location", code: "docker inspect --format='{{.LogPath}}' my-app", description: "Where the log file lives on host." }
    ]
  },
  18: {
    longDescription: "Execute a command inside a running container. Most commonly used to open a shell session for debugging (e.g., 'bash'). The command runs in the same namespace as the container's main process.",
    command: "docker exec [OPTIONS] CONTAINER COMMAND",
    examples: [
      { title: "Interactive Bash", code: "docker exec -it my-container bash", description: "Opens a terminal inside the container." },
      { title: "Interactive Sh", code: "docker exec -it my-container sh", description: "Fallback if bash isn't installed (e.g., Alpine)." },
      { title: "Run Command", code: "docker exec my-db mysqladmin ping", description: "Run a single command and exit." },
      { title: "Run as Root", code: "docker exec -u 0 -it my-container bash", description: "Force root access for debugging permissions." },
      { title: "Set Env Var", code: "docker exec -e DEBUG=1 my-app ./script.sh", description: "Set env var for this command only." },
      { title: "Set Workdir", code: "docker exec -w /tmp my-app pwd", description: "Run command in specific directory." },
      { title: "Detached Exec", code: "docker exec -d my-app touch /tmp/file", description: "Run command in background." },
      { title: "Run Multiple", code: "docker exec my-app sh -c 'echo 1 && echo 2'", description: "Use shell to run multiple commands." },
      { title: "Check User", code: "docker exec my-app whoami", description: "See which user the container runs as." },
      { title: "Test Network", code: "docker exec my-app curl google.com", description: "Debug connectivity from inside." }
    ]
  },
  19: {
    longDescription: "Publish container ports to the host. Format is '-p HOST_PORT:CONTAINER_PORT'. Without this, services inside containers are not accessible from outside the docker network. You can also specify protocol (tcp/udp).",
    command: "docker run -p <host>:<container>",
    examples: [
      { title: "Map HTTP", code: "docker run -p 8080:80 nginx", description: "Access nginx at localhost:8080." },
      { title: "Specific IP", code: "docker run -p 127.0.0.1:8080:80 nginx", description: "Restrict access to localhost only (secure)." },
      { title: "Random Port", code: "docker run -P nginx", description: "Maps exposed ports to random high ports on host." },
      { title: "UDP Port", code: "docker run -p 53:53/udp dns-server", description: "Specify UDP protocol." },
      { title: "Port Range", code: "docker run -p 8000-8010:8000-8010 my-app", description: "Maps a range of ports." },
      { title: "Inspect Mapping", code: "docker port my-container", description: "Shows current port mappings." },
      { title: "Multiple Ports", code: "docker run -p 80:80 -p 443:443 nginx", description: "Map web and ssl ports." },
      { title: "IPv6 Mapping", code: "docker run -p [::1]:80:80 nginx", description: "Bind to IPv6 localhost." },
      { title: "Prevent Binding", code: "docker run --expose 80 my-app", description: "Expose to other containers but NOT host." },
      { title: "Find Random Port", code: "docker port my-container 80", description: "Find which random port was assigned." }
    ]
  },
  20: {
    longDescription: "Monitor container resource usage (CPU, Memory, Net I/O, Block I/O) in real-time. 'docker stats' is like 'top' for containers. 'docker top' shows the running processes inside the container.",
    command: "docker stats",
    examples: [
      { title: "Live Stats", code: "docker stats", description: "Stream stats for all running containers." },
      { title: "Specific Container", code: "docker stats my-container", description: "Monitor only one container." },
      { title: "No Stream", code: "docker stats --no-stream", description: "Get a single snapshot and exit." },
      { title: "Format Output", code: "docker stats --format \"table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}\"", description: "Customize columns." },
      { title: "All Containers", code: "docker stats -a", description: "Include stopped containers (shows 0s)." },
      { title: "View Processes", code: "docker top my-container", description: "Show process list (PID, User, Time)." },
      { title: "JSON Output", code: "docker stats --format \"{{json .}}\"", description: "Get stats as JSON for parsing." },
      { title: "Top specific user", code: "docker top my-container -u myuser", description: "List processes for a user." },
      { title: "Resource Limits", code: "docker update --cpus 1 my-container", description: "Change limits based on stats observation." },
      { title: "Memory Stats", code: "docker stats --format \"{{.MemUsage}}\"", description: "Quick check of memory footprint." }
    ]
  },
  21: {
    longDescription: "Copy files or folders between a container and the local filesystem. Useful for extracting configuration files, logs, or injecting data without rebuilding. Works on stopped containers too.",
    command: "docker cp <src> <dest>",
    osCommand: {
      linux: "docker cp my-container:/app/config.json ./config.json",
      windows: "docker cp my-container:/app/config.json .\\config.json",
      mac: "docker cp my-container:/app/config.json ./config.json"
    },
    examples: [
      { title: "Container to Host", code: "docker cp my-web:/var/log/nginx/access.log .", description: "Download log file for analysis." },
      { title: "Host to Container", code: "docker cp ./index.html my-web:/usr/share/nginx/html/", description: "Hot-swap a file in running container." },
      { title: "Copy Directory", code: "docker cp my-web:/etc/nginx ./local-conf", description: "Recursively copies entire folder." },
      { title: "Pipe Tarball", code: "docker cp my-web:/app - | tar -x", description: "Stream file contents via stdout." },
      { title: "Stdin to File", code: "echo 'config' | docker cp - my-container:/app/config", description: "Write string directly to file." },
      { title: "From Stopped", code: "docker cp stopped-container:/data/db.sqlite .", description: "Recover data from a crashed container." },
      { title: "With Path Spaces", code: "docker cp \"my container:/path with spaces\" .", description: "Quote paths with spaces." },
      { title: "User Permissions", code: "docker exec my-container chown app:app /file", description: "Fix permissions after copying in." },
      { title: "Backup Config", code: "docker cp my-db:/etc/mysql/my.cnf ./backup.cnf", description: "Save config before changing." },
      { title: "Inject Script", code: "docker cp ./debug.sh my-app:/tmp/", description: "Add a debugging script to run." }
    ]
  },
  22: {
    longDescription: "Define how Docker should handle container exits. 'no' is default. 'always' restarts on exit. 'unless-stopped' restarts unless explicitly stopped by user. 'on-failure' restarts only if exit code is non-zero (crash).",
    command: "docker run --restart <policy>",
    examples: [
      { title: "Restart Always", code: "docker run -d --restart always nginx", description: "Good for web servers. Resurrects if daemon restarts." },
      { title: "Restart on Failure", code: "docker run -d --restart on-failure my-app", description: "Retries indefinitely if crashing." },
      { title: "Max Retries", code: "docker run -d --restart on-failure:5 my-app", description: "Give up after 5 crashes." },
      { title: "Unless Stopped", code: "docker run -d --restart unless-stopped nginx", description: "Like always, but stays stopped if you ran 'docker stop'." },
      { title: "Update Policy", code: "docker update --restart unless-stopped my-container", description: "Change policy of running container." },
      { title: "Check Policy", code: "docker inspect -f '{{.HostConfig.RestartPolicy.Name}}' my-container", description: "View current policy." },
      { title: "No Restart", code: "docker run -d --restart no my-job", description: "Default. Good for one-off tasks." },
      { title: "In Compose", code: "restart: always", description: "YAML syntax for compose file." },
      { title: "Exponential Backoff", code: "# Docker automatically adds delay between restarts (100ms, 200ms...)", description: "Note on behavior." },
      { title: "Reset Count", code: "# Successful run resets the on-failure counter.", description: "Note on behavior." }
    ]
  },
  23: {
    longDescription: "Every Dockerfile starts with FROM. It defines the underlying OS or base environment. You can start from 'scratch' (empty) or a full OS like 'ubuntu'. Always use specific tags for reproducibility.",
    command: "FROM <image>",
    examples: [
      { title: "Standard Base", code: "FROM python:3.9", description: "Official Python image." },
      { title: "Minimal Base", code: "FROM alpine:3.14", description: "Tiny 5MB Linux distro." },
      { title: "Specific Version", code: "FROM node:16.14.2-bullseye-slim", description: "Pinned version for stability." },
      { title: "Multi-Stage Alias", code: "FROM node:16 AS builder", description: "Names the stage 'builder' for later reference." },
      { title: "From Scratch", code: "FROM scratch", description: "Empty image. Used for Go/Rust binaries." },
      { title: "Platform Flag", code: "FROM --platform=linux/amd64 node:18", description: "Forces a specific architecture." },
      { title: "Private Registry", code: "FROM myregistry.com/base:v1", description: "Use corporate base image." },
      { title: "Arg in From", code: "ARG VERSION=18\nFROM node:${VERSION}", description: "Dynamic base image version." },
      { title: "Digest Pinning", code: "FROM alpine@sha256:bc411...", description: "Immutable base for max security." },
      { title: "Distroless", code: "FROM gcr.io/distroless/static", description: "Minimal runtime without shell." }
    ]
  },
  24: {
    longDescription: "RUN executes shell commands during the build process. Each RUN creates a new layer. Combining commands with '&&' is best practice to reduce layer count and image size. Used for installing packages and setup.",
    command: "RUN <command>",
    examples: [
      { title: "Install Packages", code: "RUN apt-get update && apt-get install -y curl", description: "Standard update and install pattern." },
      { title: "Shell Form", code: "RUN /bin/bash -c 'source $HOME/.bashrc; echo $HOME'", description: "Run in specific shell." },
      { title: "Exec Form", code: "RUN [\"/bin/bash\", \"-c\", \"echo hello\"]", description: "Avoids shell string munging." },
      { title: "Clean Cache", code: "RUN apt-get install -y nginx && rm -rf /var/lib/apt/lists/*", description: "Keep layer size small." },
      { title: "Download File", code: "RUN curl -o app.tar.gz https://example.com/app.tgz", description: "Fetch external assets." },
      { title: "Unzip File", code: "RUN tar -xzf app.tar.gz", description: "Extract archives." },
      { title: "Chmod", code: "RUN chmod +x /app/script.sh", description: "Make scripts executable." },
      { title: "User Setup", code: "RUN useradd -m myuser", description: "Create application user." },
      { title: "Pip Install", code: "RUN pip install -r requirements.txt", description: "Install Python deps." },
      { title: "Conditional Run", code: "RUN if [ \"$ENV\" = \"prod\" ]; then echo prod; fi", description: "Logic in build steps." }
    ]
  },
  25: {
    longDescription: "COPY copies local files to the container. ADD is similar but can also extract tar archives and download from URLs. Use COPY unless you specifically need ADD's extra features (auto-extraction).",
    command: "COPY <src> <dest>",
    examples: [
      { title: "Copy Current Dir", code: "COPY . /app", description: "Most common. Copies everything (respecting .dockerignore)." },
      { title: "Copy Specific File", code: "COPY package.json .", description: "Copy single file to working dir." },
      { title: "Copy Multiple", code: "COPY file1.txt file2.txt /dest/", description: "Copy list of files." },
      { title: "Chown User", code: "COPY --chown=myuser:mygroup . /app", description: "Set permissions during copy." },
      { title: "From Stage", code: "COPY --from=builder /app/build /usr/share/nginx/html", description: "Multi-stage artifact copy." },
      { title: "ADD URL", code: "ADD https://example.com/file.json /app/", description: "Download directly (use curl/RUN instead generally)." },
      { title: "ADD Extract", code: "ADD source.tar.gz /dest", description: "Auto-unzips tarballs." },
      { title: "Relative Path", code: "COPY src/ ./src/", description: "Maintain directory structure." },
      { title: "Wildcard", code: "COPY *.js /app/", description: "Copy all JS files." },
      { title: "Link flag", code: "COPY --link . /app", description: "Optimization: Copy without breaking cache of prev layers." }
    ]
  },
  26: {
    longDescription: "WORKDIR sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile. If the directory doesn't exist, it will be created. It's like 'cd' but persistent for the build.",
    command: "WORKDIR /path/to/workdir",
    examples: [
      { title: "Set Workdir", code: "WORKDIR /app", description: "Standard app directory." },
      { title: "Relative Paths", code: "WORKDIR /app\nWORKDIR src", description: "Second command goes to /app/src." },
      { title: "Create Path", code: "WORKDIR /a/b/c", description: "Auto-creates intermediate directories." },
      { title: "Env Var", code: "ENV DIR=/app\nWORKDIR $DIR", description: "Use variables in path." },
      { title: "Root Reset", code: "WORKDIR /", description: "Go back to root." },
      { title: "Affects CMD", code: "WORKDIR /bin\nCMD [\"ls\"]", description: "CMD will run 'ls' inside /bin." },
      { title: "Affects COPY", code: "WORKDIR /app\nCOPY . .", description: "Copies to /app." },
      { title: "Check Path", code: "RUN pwd", description: "Verify current WORKDIR." },
      { title: "Multiple Switching", code: "WORKDIR /build\nRUN make\nWORKDIR /app", description: "Build in one place, run in another." },
      { title: "Best Practice", code: "WORKDIR /usr/src/app", description: "Use absolute paths for clarity." }
    ]
  },
  27: {
    longDescription: "ENV sets environment variables. These persist when a container is run from the resulting image. They can be overridden at runtime. Use them for configuration, default paths, and software versions.",
    command: "ENV <key>=<value>",
    examples: [
      { title: "Single Value", code: "ENV NODE_ENV=production", description: "Set production mode." },
      { title: "Multiple Values", code: "ENV APP_HOME=/app \\\n    PORT=3000", description: "Clean multiline syntax." },
      { title: "Reference ENV", code: "ENV PATH=$PATH:/usr/local/bin", description: "Extend existing variable." },
      { title: "Use in Instruction", code: "ENV VERSION=1.0\nRUN echo $VERSION", description: "Available to subsequent RUN commands." },
      { title: "Override at Runtime", code: "docker run -e NODE_ENV=dev my-image", description: "Change default value." },
      { title: "Inspect Env", code: "docker inspect -f '{{.Config.Env}}' my-image", description: "View baked-in variables." },
      { title: "Inline Set", code: "ENV DEBIAN_FRONTEND=noninteractive", description: "Prevent apt prompts." },
      { title: "Spaces in Value", code: "ENV MESSAGE=\"Hello World\"", description: "Use quotes for spaces." },
      { title: "Dynamic Set (Bad)", code: "RUN export MY_VAR=1", description: "This only lasts for that one RUN layer!" },
      { title: "Secrets (Don't)", code: "# Do NOT use ENV for passwords. Use Docker Secrets.", description: "Security warning." }
    ]
  },
  28: {
    longDescription: "ARG defines a variable that users can pass at build-time to the builder with the '--build-arg' flag. Unlike ENV, ARGs do not persist in the final image (unless assigned to an ENV).",
    command: "ARG <name>[=<default>]",
    examples: [
      { title: "Define Argument", code: "ARG VERSION=latest", description: "With default value." },
      { title: "Use in FROM", code: "ARG NODE_VERSION=16\nFROM node:${NODE_VERSION}-alpine", description: "Dynamic base image." },
      { title: "Build Command", code: "docker build --build-arg NODE_VERSION=18 .", description: "Pass value at build time." },
      { title: "Persist ARG", code: "ARG VER\nENV VER=$VER", description: "Copy ARG to ENV to keep it in runtime." },
      { title: "Mandatory ARG", code: "ARG TOKEN", description: "Build fails if not provided (if no default)." },
      { title: "Scope", code: "ARG A=1\nFROM alpine\nRUN echo $A", description: "ARG must be re-declared after FROM if used before." },
      { title: "Secret ARG", code: "docker build --secret id=mytok ...", description: "Use build secrets instead for sensitive data." },
      { title: "Predefined ARGs", code: "ARG HTTP_PROXY", description: "Docker supports some ARGs automatically." },
      { title: "Multi-stage Passing", code: "ARG VER\nFROM ...\nARG VER", description: "Pass through stages." },
      { title: "Inspect ARGs", code: "docker history my-image", description: "ARGs are visible in history! Don't pass secrets." }
    ]
  },
  29: {
    longDescription: "EXPOSE functions as a type of documentation between the person who builds the image and the person who runs the container, about which ports are intended to be published. It does NOT actually publish the port. You still need '-p' to publish.",
    command: "EXPOSE <port> [<port>/<protocol>...]",
    examples: [
      { title: "Expose HTTP", code: "EXPOSE 80", description: "Standard web port." },
      { title: "Multiple Ports", code: "EXPOSE 80 443", description: "HTTP and HTTPS." },
      { title: "Protocol", code: "EXPOSE 53/udp", description: "DNS uses UDP." },
      { title: "Publish All", code: "docker run -P my-image", description: "Publishes all EXPOSEd ports to random host ports." },
      { title: "Documentation", code: "# Just tells users: 'This app listens on 3000'", description: "Primary purpose." },
      { title: "Inspect Expose", code: "docker inspect -f '{{.Config.ExposedPorts}}' my-image", description: "View defined ports." },
      { title: "Range", code: "EXPOSE 8000-8010", description: "Expose a block of ports." },
      { title: "No Effect", code: "docker run my-image", description: "Ports are NOT accessible on host by default." },
      { title: "Best Practice", code: "EXPOSE 3000", description: "Always match your app's listening port." },
      { title: "Compose Mappings", code: "ports:\n - \"8080:80\"", description: "Explicit mapping is still required." }
    ]
  },
  30: {
    longDescription: "CMD provides defaults for an executing container. There can only be one CMD instruction in a Dockerfile. If you list more than one, only the last one takes effect. It is easily overridden by arguments passed to 'docker run'.",
    command: "CMD [\"executable\",\"param1\",\"param2\"]",
    examples: [
      { title: "Exec Form", code: "CMD [\"node\", \"index.js\"]", description: "Preferred JSON array format." },
      { title: "Shell Form", code: "CMD echo \"hello\"", description: "Runs wrapped in /bin/sh -c." },
      { title: "Override CMD", code: "docker run my-image /bin/bash", description: "Replaces CMD with /bin/bash." },
      { title: "Default Args", code: "ENTRYPOINT [\"echo\"]\nCMD [\"hello\"]", description: "Provides default args to ENTRYPOINT." },
      { title: "Start Web Server", code: "CMD [\"nginx\", \"-g\", \"daemon off;\"]", description: "Keep foreground process running." },
      { title: "Run Script", code: "CMD [\"./start.sh\"]", description: "Run a startup shell script." },
      { title: "Empty CMD", code: "CMD []", description: "Used when parent image has CMD you want to clear." },
      { title: "Python App", code: "CMD [\"python\", \"app.py\"]", description: "Standard python launch." },
      { title: "Java App", code: "CMD [\"java\", \"-jar\", \"app.jar\"]", description: "Standard Java launch." },
      { title: "Debug CMD", code: "docker inspect -f '{{.Config.Cmd}}' my-image", description: "See what the CMD is set to." }
    ]
  },
  31: {
    longDescription: "ENTRYPOINT configures a container that will run as an executable. Command line arguments to 'docker run <image>' will be appended after all elements in an exec form ENTRYPOINT, and will override all elements specified using CMD. It is harder to override than CMD.",
    command: "ENTRYPOINT [\"executable\", \"param1\"]",
    examples: [
      { title: "Fixed Executable", code: "ENTRYPOINT [\"curl\"]", description: "Container acts like the curl binary." },
      { title: "Run with Args", code: "docker run my-curl google.com", description: "Executes: curl google.com" },
      { title: "Wrapper Script", code: "ENTRYPOINT [\"/entrypoint.sh\"]", description: "Run setup script before main app." },
      { title: "Override Entrypoint", code: "docker run --entrypoint /bin/bash my-image", description: "Force different executable." },
      { title: "Exec Form", code: "ENTRYPOINT [\"/bin/ping\"]", description: "Recommended format." },
      { title: "Shell Form", code: "ENTRYPOINT /bin/ping", description: "Ignores CMD and run arguments! (Avoid this)." },
      { title: "Combine with CMD", code: "ENTRYPOINT [\"echo\"]\nCMD [\"Hello\"]", description: "Default is 'echo Hello'." },
      { title: "Database Init", code: "ENTRYPOINT [\"docker-entrypoint.sh\"]", description: "Common pattern for DBs to init data." },
      { title: "Inspect Entrypoint", code: "docker inspect -f '{{.Config.Entrypoint}}' my-image", description: "Check configured entrypoint." },
      { title: "Tini Init", code: "ENTRYPOINT [\"/sbin/tini\", \"--\"]", description: "Use simple init system to handle signals." }
    ]
  },
  32: {
    longDescription: "Understanding CMD vs ENTRYPOINT is crucial. ENTRYPOINT is the command to run. CMD is the default arguments to that command. If you use both, they concatenate: ENTRYPOINT + CMD. If you only use CMD, it's effectively: /bin/sh -c CMD (shell form) or just CMD (exec form).",
    command: "ENTRYPOINT + CMD",
    examples: [
      { title: "Best Practice Pattern", code: "ENTRYPOINT [\"/bin/my-app\"]\nCMD [\"--help\"]", description: "Runs app with help by default. User passes args to override help." },
      { title: "CMD Only", code: "CMD [\"python\", \"app.py\"]", description: "User can override entire command easily." },
      { title: "ENTRYPOINT Only", code: "ENTRYPOINT [\"python\", \"app.py\"]", description: "User args are appended to app.py (rarely desired)." },
      { title: "Shell vs Exec", code: "ENTRYPOINT top\nCMD -b", description: "Shell form ENTRYPOINT ignores CMD entirely!" },
      { title: "Override CMD", code: "docker run my-image --version", description: "Becomes: /bin/my-app --version" },
      { title: "Override ENTRYPOINT", code: "docker run --entrypoint ls my-image -la", description: "Completely changes binary." },
      { title: "Debug CMD", code: "CMD [\"sh\"]", description: "Default to shell, user can run specific command." },
      { title: "Utility Container", code: "ENTRYPOINT [\"npm\"]", description: "Container acts as npm tool." },
      { title: "CI Worker", code: "ENTRYPOINT [\"/runner\"]", description: "Fixed worker binary." },
      { title: "Reset", code: "ENTRYPOINT []", description: "Reset inherited entrypoint in child image." }
    ]
  },
  33: {
    longDescription: "VOLUME creates a mount point with the specified name and marks it as holding externally mounted volumes from native host or other containers. It tells Docker that this directory holds data that should persist or be shared. It causes an anonymous volume to be created if the user doesn't map one at runtime.",
    command: "VOLUME [\"/data\"]",
    examples: [
      { title: "Define Volume", code: "VOLUME /var/lib/mysql", description: "Database data directory." },
      { title: "Multiple Volumes", code: "VOLUME [\"/var/www\", \"/var/log/apache2\"]", description: "Define multiple points." },
      { title: "JSON Format", code: "VOLUME [\"/data\"]", description: "Preferred syntax." },
      { title: "String Format", code: "VOLUME /data", description: "Alternative syntax." },
      { title: "Anonymous Creation", code: "docker run my-db", description: "Creates random hash volume for /var/lib/mysql." },
      { title: "Override", code: "docker run -v my-named-vol:/var/lib/mysql my-db", description: "User provides specific volume." },
      { title: "Inspect Config", code: "docker inspect -f '{{.Config.Volumes}}' my-image", description: "See defined volumes." },
      { title: "Warning", code: "# You cannot map a VOLUME to a host path in Dockerfile", description: "Must be done at runtime." },
      { title: "Performance", code: "# Volumes bypass the copy-on-write layer", description: "Crucial for DB performance." },
      { title: "Persistence", code: "# Data survives container removal if volume is named", description: "Key benefit." }
    ]
  },
  34: {
    longDescription: "USER sets the user name (or UID) and optionally the user group (or GID) to use when running the image and for any RUN, CMD and ENTRYPOINT instructions that follow it in the Dockerfile. Switching to a non-root user is a critical security best practice.",
    command: "USER <user>[:<group>]",
    examples: [
      { title: "Create and Set", code: "RUN useradd -m appuser\nUSER appuser", description: "Common pattern." },
      { title: "Set UID", code: "USER 1000", description: "Use ID instead of name (better for k8s)." },
      { title: "Set UID:GID", code: "USER 1000:1000", description: "Explicit group." },
      { title: "Root Revert", code: "USER root\nRUN apt-get update\nUSER appuser", description: "Temp switch for install." },
      { title: "Runtime Override", code: "docker run -u root my-image", description: "Force root at runtime." },
      { title: "Check User", code: "RUN whoami", description: "Verify current user." },
      { title: "Permission Denied", code: "# If you switch user, ensure they can read/write files!", description: "Common error source." },
      { title: "Node Image", code: "USER node", description: "Official node images come with 'node' user." },
      { title: "Security Context", code: "# Runs process as non-privileged user on host", description: "Security benefit." },
      { title: "Workdir Ownership", code: "WORKDIR /app\nRUN chown app:app /app", description: "Ensure write access." }
    ]
  },
  35: {
    longDescription: "LABEL adds metadata to an image. A LABEL is a key-value pair. To view labels for an image, use the docker inspect command. Useful for organization, automation, and licensing info.",
    command: "LABEL <key>=<value>",
    examples: [
      { title: "Add Metadata", code: "LABEL version=\"1.0\" description=\"Web Server\"", description: "Basic info." },
      { title: "Maintainer", code: "LABEL maintainer=\"me@example.com\"", description: "Contact info (replaces MAINTAINER instruction)." },
      { title: "Multi-line", code: "LABEL vendor=\"ACME Corp\" \\\n      release-date=\"2023-01-01\"", description: "Cleaner syntax." },
      { title: "Filter Images", code: "docker images -f \"label=vendor=ACME\"", description: "Find images by label." },
      { title: "Filter Containers", code: "docker ps -f \"label=env=prod\"", description: "Find running containers." },
      { title: "Inspect Labels", code: "docker inspect -f '{{.Config.Labels}}' my-image", description: "Read all labels." },
      { title: "OCI Standard", code: "LABEL org.opencontainers.image.authors=\"Me\"", description: "Use standard keys." },
      { title: "Build-time Label", code: "ARG BUILD_DATE\nLABEL build_date=$BUILD_DATE", description: "Dynamic labeling." },
      { title: "License", code: "LABEL license=\"MIT\"", description: "Legal info." },
      { title: "Prune Filter", code: "docker image prune --filter=\"label!=keep\"", description: "Advanced cleanup." }
    ]
  },
  36: {
    longDescription: "HEALTHCHECK tells Docker how to test a container to check that it is still working. This can detect cases such as a web server that is stuck in an infinite loop and unable to handle new connections, even though the server process is still running. Docker uses the exit code: 0=healthy, 1=unhealthy.",
    command: "HEALTHCHECK [OPTIONS] CMD command",
    examples: [
      { title: "Web Check", code: "HEALTHCHECK --interval=5m --timeout=3s \\\n  CMD curl -f http://localhost/ || exit 1", description: "Pings web server every 5 mins." },
      { title: "Disable Parent", code: "HEALTHCHECK NONE", description: "Turn off inherited check." },
      { title: "Check Status", code: "docker ps", description: "Shows (healthy) or (unhealthy) in status column." },
      { title: "Filter Unhealthy", code: "docker ps --filter \"health=unhealthy\"", description: "Find broken containers." },
      { title: "Start Period", code: "HEALTHCHECK --start-period=30s ...", description: "Grace period for slow startups." },
      { title: "Retries", code: "HEALTHCHECK --retries=3 ...", description: "Fail 3 times before marking unhealthy." },
      { title: "Inspect Health", code: "docker inspect --format='{{json .State.Health}}' my-container", description: "View check logs." },
      { title: "Compose Config", code: "healthcheck:\n  test: [\"CMD\", \"curl\", \"-f\", \"http://localhost\"]", description: "Define in compose." },
      { title: "Depends On", code: "depends_on:\n  db:\n    condition: service_healthy", description: "Wait for health before starting dependent." },
      { title: "Custom Script", code: "COPY health.sh /bin/\nHEALTHCHECK CMD /bin/health.sh", description: "Complex logic." }
    ]
  },
  37: {
    longDescription: "The .dockerignore file allows you to exclude files and directories from the build context. This is critical for performance and security. It prevents local development files (like node_modules, .git, secrets, or logs) from being sent to the Docker daemon and included in the image. It works exactly like .gitignore.",
    command: "cat .dockerignore",
    examples: [
      { title: "Common Pattern", code: "node_modules\n.git\n.env\ndocker-compose.yml\nREADME.md", description: "Standard exclusions." },
      { title: "Ignore Everything Except", code: "*\n!src/\n!package.json", description: "Allowlist strategy." },
      { title: "Ignore Secrets", code: "**/*.key\n**/*.pem", description: "Security safety net." },
      { title: "Ignore Build Logs", code: "npm-debug.log\nyarn-error.log", description: "Keep image clean." },
      { title: "Comments", code: "# This is a comment", description: "Supported syntax." },
      { title: "Check Context", code: "docker build .", description: "See 'Sending build context to Docker daemon' size." },
      { title: "Debug Context", code: "docker build -f Dockerfile.debug .", description: "Copy . to /app and ls -la to check." },
      { title: "Nested Ignore", code: "src/ignored_file.txt", description: "Specific path ignore." },
      { title: "Performance", code: "# Reduces upload size to daemon (remote builds)", description: "Speed benefit." },
      { title: "Cache", code: "# Prevents cache invalidation from irrelevant files", description: "Build speed benefit." }
    ]
  },
  38: {
    longDescription: "Multi-stage builds allow you to use multiple FROM statements in your Dockerfile. Each FROM instruction can use a different base, and each of them begins a new stage of the build. You can selectively copy artifacts from one stage to another, leaving behind everything you don't need in the final image. This results in drastically smaller images.",
    command: "FROM ... AS ...",
    examples: [
      { title: "Go Example", code: "FROM golang:1.16 AS builder\nWORKDIR /app\nCOPY . .\nRUN go build -o myapp .\n\nFROM alpine:latest\nCOPY --from=builder /app/myapp /app/\nCMD [\"/app/myapp\"]", description: "Classic compiled language pattern." },
      { title: "Node Example", code: "FROM node:18 AS build\nRUN npm run build\n\nFROM nginx\nCOPY --from=build /app/dist /usr/share/nginx/html", description: "Static site pattern." },
      { title: "Target Stage", code: "docker build --target builder .", description: "Stop build at specific stage." },
      { title: "Name Stages", code: "FROM node AS dev", description: "Readable stage names." },
      { title: "Copy from Image", code: "COPY --from=nginx:latest /etc/nginx/conf.d /etc/nginx/conf.d", description: "Steal files." },
      { title: "Separate Deps", code: "FROM base AS deps\nRUN npm install --prod", description: "Layer caching strategy." },
      { title: "Test Stage", code: "FROM builder AS test\nRUN npm test", description: "Run tests in build." },
      { title: "Debug Stage", code: "FROM base AS debug\nRUN apt-get install vim", description: "Dev specific tools." },
      { title: "Security", code: "# Secrets used in build stage don't persist to final", description: "Security benefit." },
      { title: "Size Reduction", code: "# Final image: 50MB (Alpine) vs 1GB (Go SDK)", description: "Size benefit." }
    ]
  },
  39: {
    longDescription: "The Bridge network is the default network driver. Containers on the same bridge can communicate via IP address. Custom user-defined bridges are superior as they enable automatic DNS resolution by container name. The default 'bridge' does not support DNS resolution.",
    command: "docker network create --driver bridge my-net",
    examples: [
      { title: "Create Bridge", code: "docker network create my-net", description: "Creates a user-defined bridge." },
      { title: "Run on Network", code: "docker run --network my-net --name c1 nginx", description: "Attach container." },
      { title: "DNS Resolution", code: "docker run --network my-net c2 alpine ping c1", description: "Ping by name works!" },
      { title: "Default Bridge", code: "docker run bridge-test alpine", description: "Attaches to 'bridge' (no DNS)." },
      { title: "Inspect Network", code: "docker network inspect my-net", description: "See subnet and connected containers." },
      { title: "Connect Running", code: "docker network connect my-net existing-c", description: "Hot-plug network." },
      { title: "Disconnect", code: "docker network disconnect my-net existing-c", description: "Remove from network." },
      { title: "Specify Subnet", code: "docker network create --subnet=172.18.0.0/16 my-net", description: "Custom IP range." },
      { title: "Isolation", code: "# Containers on different bridges cannot talk", description: "Security feature." },
      { title: "Gateway", code: "docker network inspect my-net | grep Gateway", description: "Host IP on that network." }
    ]
  },
  40: {
    longDescription: "If you use the host network mode for a container, that container's network stack is not isolated from the Docker host. The container shares the host's networking namespace, and the container does not get its own IP-address allocated. Port mapping (-p) is ignored because the container uses the host ports directly.",
    command: "docker run --network host ...",
    examples: [
      { title: "Use Host Net", code: "docker run --rm -d --network host --name my_nginx nginx", description: "Nginx binds directly to host port 80." },
      { title: "Performance", code: "# No NAT overhead. Fastest networking.", description: "Use case: High throughput." },
      { title: "Port Conflict", code: "# Fails if port 80 is already used on host", description: "Downside." },
      { title: "Linux Only", code: "# --network host works best on Linux. Desktop VMs differ.", description: "Platform note." },
      { title: "Sniff Traffic", code: "tcpdump -i eth0", description: "Container traffic visible on host interface." },
      { title: "No Port Flag", code: "docker run --network host -p 80:80 nginx", description: "Warning: -p is discarded." },
      { title: "Service Discovery", code: "# Useful for mDNS/legacy apps", description: "Use case." },
      { title: "Security", code: "# Reduces isolation. Use with care.", description: "Risk." },
      { title: "Swarm Mode", code: "ports:\n  - target: 80\n    mode: host", description: "Host mode in Swarm." },
      { title: "Inspect", code: "docker inspect -f '{{.HostConfig.NetworkMode}}' my-c", description: "Returns 'host'." }
    ]
  },
  41: {
    longDescription: "The none network mode disables all networking for the container. It will not have access to the external network or other containers. Useful for secure, isolated jobs that only need to process data and not talk to anything.",
    command: "docker run --network none ...",
    examples: [
      { title: "Isolate Container", code: "docker run --rm --network none alpine ip addr", description: "Only loopback interface exists." },
      { title: "Secure Job", code: "docker run --network none -v /data:/data parser", description: "Process sensitive data offline." },
      { title: "No Internet", code: "ping google.com", description: "Fails instantly (Network is unreachable)." },
      { title: "Inspect", code: "docker inspect -f '{{.NetworkSettings.Networks}}' my-c", description: "Returns 'none'." },
      { title: "Batch Processing", code: "# Good for pure computation tasks", description: "Use case." },
      { title: "Security Audit", code: "# Malware analysis sandbox", description: "Use case." },
      { title: "Compliance", code: "# Ensuring data never leaves the container", description: "Requirement." },
      { title: "Debug", code: "ip link show", description: "Only 'lo' interface is up." },
      { title: "Connect Later", code: "docker network connect bridge my-c", description: "You can attach network to running container later." },
      { title: "Compose", code: "network_mode: none", description: "In docker-compose.yml." }
    ]
  },
  42: {
    longDescription: "Overlay networks connect multiple Docker daemons together and enable swarm services to communicate with each other. You can also use overlay networks to facilitate communication between a swarm service and a standalone container, or between two standalone containers on different Docker daemons.",
    command: "docker network create -d overlay ...",
    examples: [
      { title: "Create Overlay", code: "docker network create -d overlay my-overlay", description: "Requires Swarm mode or KV store." },
      { title: "Attach Service", code: "docker service create --network my-overlay nginx", description: "Service runs on the overlay." },
      { title: "Encryption", code: "docker network create --opt encrypted my-overlay", description: "Encrypt data plane traffic (IPSec)." },
      { title: "Attachable", code: "docker network create --attachable -d overlay my-net", description: "Allow standalone containers to join." },
      { title: "Multi-Host", code: "# Containers on different nodes can ping each other", description: "Core feature." },
      { title: "Ingress", code: "docker network inspect ingress", description: "The default load-balancing overlay." },
      { title: "Subnet", code: "docker network create --subnet=10.0.0.0/24 -d overlay my-net", description: "Custom addressing." },
      { title: "Inspect", code: "docker network inspect my-overlay", description: "See scope: swarm." },
      { title: "Remove", code: "docker network rm my-overlay", description: "Deletes network across cluster." },
      { title: "Publish Port", code: "docker service create -p 80:80 nginx", description: "Uses ingress overlay mesh." }
    ]
  },
  43: {
    longDescription: "User-defined bridges are superior to the default bridge. They provide automatic DNS resolution between containers, and better isolation. Containers connected to the same user-defined bridge network automatically expose all ports to each other, and no ports to the outside world.",
    command: "docker network create <name>",
    examples: [
      { title: "Create Bridge", code: "docker network create my-net", description: "Simple creation." },
      { title: "Create with Subnet", code: "docker network create --subnet=172.18.0.0/16 my-net", description: "Define IP range." },
      { title: "Connect Two Apps", code: "docker run --net my-net --name db mysql\ndocker run --net my-net --name web app", description: "Web can reach db by name 'db'." },
      { title: "Isolate Stack", code: "# Only containers on 'my-net' can talk", description: "Security boundary." },
      { title: "Specific Gateway", code: "docker network create --gateway 172.18.0.1 my-net", description: "Set gateway IP." },
      { title: "Internal Mode", code: "docker network create --internal my-net", description: "No outbound internet access." },
      { title: "Connect Multiple", code: "docker network connect other-net my-c", description: "Container can be on multiple nets." },
      { title: "Legacy Link", code: "# No need for --link anymore", description: "Deprecated feature." },
      { title: "IPv6", code: "docker network create --ipv6 my-net", description: "Enable IPv6." },
      { title: "Remove Network", code: "docker network rm my-net", description: "Only if no containers connected." }
    ]
  },
  44: {
    longDescription: "Containers on the same user-defined network can resolve each other by name (and alias). This internal DNS service is automatic and built-in at 127.0.0.11. On the default bridge, you must use --link (legacy) which is discouraged.",
    command: "ping <container-name>",
    examples: [
      { title: "Ping by Name", code: "docker exec c1 ping c2", description: "Works if on same custom network." },
      { title: "Network Alias", code: "docker run --network my-net --network-alias db mysql", description: "Responds to 'db' and container ID." },
      { title: "Service Discovery", code: "# Apps use hostname 'postgres' to connect", description: "Standard pattern." },
      { title: "Inspect DNS", code: "cat /etc/resolv.conf", description: "Inside container: nameserver 127.0.0.11." },
      { title: "Lookup Tool", code: "docker run --net my-net tutum/dnsutils nslookup c1", description: "Debug DNS resolution." },
      { title: "Round Robin", code: "# Multiple containers with same alias share traffic", description: "Simple load balancing." },
      { title: "Search Domain", code: "docker run --dns-search example.com ...", description: "Custom search domains." },
      { title: "External DNS", code: "docker run --dns 8.8.8.8 ...", description: "Force using Google DNS." },
      { title: "Hostname", code: "docker run --hostname my-host ...", description: "Sets internal hostname." },
      { title: "Troubleshoot", code: "docker network inspect my-net", description: "Check if containers are actually connected." }
    ]
  },
  45: {
    longDescription: "Inspect a network to see its configuration, subnet, gateway, and connected containers. This is the primary way to debug 'why can't container A talk to container B?'.",
    command: "docker network inspect <network>",
    examples: [
      { title: "Inspect Bridge", code: "docker network inspect bridge", description: "View default network details." },
      { title: "Find Container IP", code: "docker network inspect my-net | grep IPv4Address", description: "See assigned IPs." },
      { title: "List Containers", code: "docker network inspect -f '{{range .Containers}}{{.Name}} {{end}}' my-net", description: "Who is connected?" },
      { title: "Check Subnet", code: "docker network inspect -f '{{range .IPAM.Config}}{{.Subnet}}{{end}}' my-net", description: "Verify IP range." },
      { title: "View Options", code: "docker network inspect my-net", description: "Check MTU, Driver, Labels." },
      { title: "JSON Output", code: "docker network inspect my-net > net.json", description: "Save for analysis." },
      { title: "Filter ID", code: "docker network inspect -f '{{.Id}}' my-net", description: "Get network ID." },
      { title: "Check Driver", code: "docker network inspect -f '{{.Driver}}' my-net", description: "bridge, host, overlay, etc." },
      { title: "Multiple Networks", code: "docker network inspect net1 net2", description: "Inspect multiple at once." },
      { title: "Verbose", code: "docker network inspect --verbose my-net", description: "More details for plugins." }
    ]
  },
  46: {
    longDescription: "Connect a running container to a network. A container can be connected to multiple networks simultaneously. This allows it to act as a bridge or proxy between two isolated networks.",
    command: "docker network connect <network> <container>",
    examples: [
      { title: "Connect", code: "docker network connect my-net my-container", description: "Hot-add network interface." },
      { title: "Disconnect", code: "docker network disconnect my-net my-container", description: "Remove interface." },
      { title: "Connect with IP", code: "docker network connect --ip 172.18.0.22 my-net my-c", description: "Assign static IP." },
      { title: "Connect Alias", code: "docker network connect --alias web my-net my-c", description: "Add DNS alias on this net." },
      { title: "Force Connect", code: "# Container gets a new eth1 interface", description: "Behavior note." },
      { title: "Isolate DB", code: "# DB on backend-net, App on frontend-net AND backend-net", description: "Architecture pattern." },
      { title: "Inspect Connection", code: "docker inspect my-container", description: "See all attached networks." },
      { title: "Disconnect Force", code: "docker network disconnect -f my-net my-c", description: "Force removal." },
      { title: "Bridge Pattern", code: "# Proxy container sits on public and private nets", description: "Use case." },
      { title: "Limit", code: "# Cannot connect to host network after start", description: "Limitation." }
    ]
  },
  47: {
    longDescription: "Volumes are the preferred way to persist data. They are managed by Docker and stored in '/var/lib/docker/volumes' (on Linux). They bypass the Union File System, offering native performance. They survive container deletion and can be shared safely.",
    command: "docker volume create <name>",
    examples: [
      { title: "Create Volume", code: "docker volume create db_data", description: "Explicit creation." },
      { title: "Mount Volume", code: "docker run -v db_data:/var/lib/mysql mysql", description: "Mount at runtime." },
      { title: "Populate Volume", code: "# If volume is empty, Docker copies data from image to volume", description: "Initialization feature." },
      { title: "Mount Syntax", code: "docker run --mount source=db_data,target=/data my-app", description: "Verbose syntax (recommended)." },
      { title: "Remove Volume", code: "docker volume rm db_data", description: "Delete data permanently." },
      { title: "List Volumes", code: "docker volume ls", description: "See all managed volumes." },
      { title: "Inspect Volume", code: "docker volume inspect db_data", description: "Find path on host." },
      { title: "Backup Volume", code: "docker run -v db_data:/db -v $(pwd):/backup ubuntu tar cvf /backup/backup.tar /db", description: "Classic backup one-liner." },
      { title: "Restore Volume", code: "docker run -v db_data:/db -v $(pwd):/backup ubuntu tar xvf /backup/backup.tar -C /", description: "Restore one-liner." },
      { title: "Driver Options", code: "docker volume create --driver local --opt type=nfs ...", description: "Advanced storage drivers." }
    ]
  },
  48: {
    longDescription: "Bind mounts map a host file or directory to a container file or directory. They rely on the host machine's filesystem, so paths are OS-specific. Great for development (hot reloading) but less portable than volumes.",
    command: "docker run -v <host-path>:<container-path> ...",
    osCommand: {
      linux: "docker run -v /home/user/project:/app nginx",
      windows: "docker run -v C:\\Users\\User\\project:/app nginx",
      mac: "docker run -v /Users/user/project:/app nginx"
    },
    usage: "docker run -v $(pwd):/app nginx",
    examples: [
      { title: "Mount Code", code: "docker run -v $(pwd):/app node", description: "Live code updates." },
      { title: "Mount Config", code: "docker run -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf nginx", description: "Inject single file." },
      { title: "Read Only", code: "docker run -v $(pwd):/app:ro my-app", description: "Prevent container from modifying host files." },
      { title: "Mount Socket", code: "docker run -v /var/run/docker.sock:/var/run/docker.sock docker", description: "Docker-in-Docker pattern." },
      { title: "Permission Issues", code: "# Container user must have permission to read host path", description: "Common gotcha." },
      { title: "Windows Path", code: "docker run -v c:/data:/data alpine", description: "Windows syntax." },
      { title: "Bind Propagation", code: "docker run -v /data:/data:rshared ...", description: "Advanced mount propagation." },
      { title: "Create on Host", code: "# Docker creates host dir if it doesn't exist (as root)", description: "Side effect." },
      { title: "Performance", code: "# Slower than volumes on Mac/Windows due to VM overhead", description: "Performance note." },
      { title: "Compose Syntax", code: "volumes:\n  - .:/app", description: "Relative path in Compose." }
    ]
  },
  49: {
    longDescription: "tmpfs mounts are stored in the host system's memory only, and are never written to the host system's filesystem. Useful for sensitive data (secrets) or high-performance temporary scratch space that doesn't need to persist.",
    command: "docker run --tmpfs <mount-path>",
    examples: [
      { title: "Use tmpfs", code: "docker run --tmpfs /run/secrets alpine", description: "Mount memory at path." },
      { title: "Specify Size", code: "docker run --mount type=tmpfs,destination=/app,tmpfs-size=100m my-app", description: "Limit memory usage." },
      { title: "Permissions", code: "docker run --mount type=tmpfs,destination=/app,tmpfs-mode=1770 my-app", description: "Set file mode." },
      { title: "Speed", code: "# Extremely fast read/write", description: "Benefit." },
      { title: "Security", code: "# Data vanishes on stop. Leaves no trace on disk.", description: "Benefit." },
      { title: "No Sharing", code: "# Cannot be shared between containers", description: "Limitation." },
      { title: "Linux Only", code: "# --tmpfs flag is Linux only. Use --mount on others.", description: "Platform note." },
      { title: "Compose", code: "tmpfs:\n  - /run/secrets", description: "Compose syntax." },
      { title: "Read Only Root", code: "docker run --read-only --tmpfs /run my-app", description: "Secure immutable container." },
      { title: "Cache", code: "# Good for compilation cache", description: "Use case." }
    ]
  },
  50: {
    longDescription: "Manage volumes explicitly using the volume subcommand. Pruning unused volumes is critical for disk space management.",
    command: "docker volume ls",
    examples: [
      { title: "List Volumes", code: "docker volume ls", description: "Show all volumes." },
      { title: "Prune Unused", code: "docker volume prune", description: "Delete all volumes not mounted to a container." },
      { title: "Inspect", code: "docker volume inspect my-vol", description: "See metadata." },
      { title: "Remove", code: "docker volume rm my-vol", description: "Destroy volume." },
      { title: "Force Remove", code: "docker volume rm -f my-vol", description: "Force delete." },
      { title: "Filter", code: "docker volume ls -f dangling=true", description: "Show unattached volumes." },
      { title: "Create with Label", code: "docker volume create --label type=db my-vol", description: "Organize volumes." },
      { title: "Remove Multiple", code: "docker volume rm vol1 vol2", description: "Batch delete." },
      { title: "Check Driver", code: "docker volume ls --format '{{.Driver}}'", description: "Check storage backend." },
      { title: "Disk Usage", code: "docker system df -v", description: "Show space used by volumes." }
    ]
  },
  51: {
    longDescription: "Named volumes have a specific source name (e.g., 'db-data'). Anonymous volumes have a random hash name. Both function similarly, but named volumes are easier to reference, backup, and share. Anonymous volumes are often created automatically by the VOLUME instruction in Dockerfiles.",
    command: "docker run -v name:/path ...",
    examples: [
      { title: "Named Volume", code: "docker run -v my-data:/data alpine", description: "Persistent and easy to find." },
      { title: "Anonymous Volume", code: "docker run -v /data alpine", description: "Docker creates a random hash name." },
      { title: "Find Anon Vol", code: "docker inspect -f '{{.Mounts}}' my-container", description: "Find the hash name." },
      { title: "Cleanup", code: "docker run --rm -v /data alpine", description: "Anon volume removed on exit." },
      { title: "Risk", code: "# Anon volumes can accumulate if not careful", description: "Maintenance warning." },
      { title: "Dockerfile VOLUME", code: "VOLUME /data", description: "Creates anon volume automatically." },
      { title: "Compose Named", code: "volumes:\n  db-data:", description: "Explicit definition." },
      { title: "Compose Anon", code: "# Omit volume key in top level", description: "Implicit definition." },
      { title: "Migration", code: "# You can migrate anon data to named volume via docker cp", description: "Recovery." },
      { title: "Best Practice", code: "# Always use named volumes for important data", description: "Recommendation." }
    ]
  },
  52: {
    longDescription: "Multiple containers can mount the same volume simultaneously. This allows them to share data seamlessly. Be careful with concurrent writes! One container writing and another reading is a common pattern.",
    command: "docker run --volumes-from <container>",
    examples: [
      { title: "Share Volume", code: "docker run --name c2 --volumes-from c1 alpine", description: "c2 gets all volumes from c1." },
      { title: "Concurrent Access", code: "docker run -v data:/data app1\ndocker run -v data:/data app2", description: "Both see /data." },
      { title: "Log Processing", code: "# App writes to /logs, Agent reads /logs", description: "Use case." },
      { title: "Init Container", code: "# Init populates /data, App uses /data", description: "Use case." },
      { title: "Read Only Share", code: "docker run -v data:/data:ro reporter", description: "Safe sharing." },
      { title: "Backup Container", code: "docker run --volumes-from db-container backup-tool", description: "Transient backup job." },
      { title: "Data Container", code: "# Legacy pattern: Create stopped container just for data", description: "Historical pattern." },
      { title: "Locking", code: "# App must handle file locking if writing same file!", description: "Critical warning." },
      { title: "Different Paths", code: "docker run -v vol:/app1 app1\ndocker run -v vol:/app2 app2", description: "Mount same vol at different paths." },
      { title: "Cross-Host", code: "# Requires NFS or cloud driver (e.g. RexRay)", description: "Advanced sharing." }
    ]
  },
  53: {
    longDescription: "Docker Compose allows you to define and run multi-container Docker applications. You define the services, networks, and volumes in a YAML file, then spin up the entire application stack with a single command. It handles startup order, networking, and configuration management.",
    command: "docker compose up",
    examples: [
      { title: "Basic Stack", code: "docker compose up -d", description: "Start the project in background." },
      { title: "Stop Stack", code: "docker compose down", description: "Stop and remove containers." },
      { title: "View Logs", code: "docker compose logs -f", description: "Stream logs from all services." },
      { title: "Rebuild", code: "docker compose up -d --build", description: "Force image rebuild." },
      { title: "List Services", code: "docker compose ps", description: "Show status of stack." },
      { title: "Run One Service", code: "docker compose up db", description: "Start only the db service." },
      { title: "Scale", code: "docker compose up --scale worker=3", description: "Start 3 instances of worker." },
      { title: "Validate", code: "docker compose config", description: "Check YAML syntax." },
      { title: "Env Vars", code: "IMAGE_TAG=v1 docker compose up", description: "Interpolate variables in YAML." },
      { title: "Project Name", code: "docker compose -p myproj up", description: "Isolate multiple instances." }
    ]
  },
  54: {
    longDescription: "The compose file is the heart of Docker Compose. It uses YAML syntax to define services, networks, and volumes. Version 3 is the most common, though the 'version' field is optional in the latest Compose specification. The structure is hierarchical: services contain containers, which have images/builds.",
    command: "cat docker-compose.yml",
    examples: [
      { title: "Basic Structure", code: "services:\n  web:\n    image: nginx\n    ports:\n      - \"80:80\"", description: "Minimal example." },
      { title: "Full Example", code: "services:\n  db:\n    image: postgres\n    volumes:\n      - db_data:/var/lib/postgresql/data\nvolumes:\n  db_data:", description: "With volumes." },
      { title: "Version", code: "version: '3.8'", description: "Legacy version declaration." },
      { title: "Networks", code: "networks:\n  frontend:\n  backend:", description: "Defining networks." },
      { title: "Service Name", code: "services:\n  my-api:", description: "DNS hostname will be 'my-api'." },
      { title: "Restart", code: "restart: always", description: "Service configuration." },
      { title: "Build Context", code: "build: .", description: "Build from Dockerfile." },
      { title: "Secrets", code: "secrets:\n  db_pass:\n    file: ./password.txt", description: "Secret definition." },
      { title: "Configs", code: "configs:\n  my_conf:\n    file: ./conf.json", description: "Config files." },
      { title: "Anchor/Alias", code: "x-common: &common\n  logging: ...\nservice:\n  <<: *common", description: "YAML reuse (advanced)." }
    ]
  },
  55: {
    longDescription: "A service definition contains configuration that is applied to each container started for that service. It's like the arguments to 'docker run'. You define the image, ports, volumes, command, and environment variables here.",
    command: "services:",
    examples: [
      { title: "Image Based", code: "services:\n  redis:\n    image: redis:alpine", description: "Pull from registry." },
      { title: "Build Based", code: "services:\n  webapp:\n    build: ./frontend", description: "Build locally." },
      { title: "Container Name", code: "container_name: my-web-container", description: "Fixed name (prevents scaling!)." },
      { title: "Command", code: "command: npm start", description: "Override CMD." },
      { title: "Entrypoint", code: "entrypoint: /app/start.sh", description: "Override ENTRYPOINT." },
      { title: "User", code: "user: \"1000:1000\"", description: "Run as user." },
      { title: "Working Dir", code: "working_dir: /app", description: "Set cwd." },
      { title: "Hostname", code: "hostname: my-web", description: "Internal hostname." },
      { title: "Privileged", code: "privileged: true", description: "Give full root access." },
      { title: "Read Only", code: "read_only: true", description: "Lock filesystem." }
    ]
  },
  56: {
    longDescription: "depends_on expresses dependency between services. Service startup is deferred until dependencies have started. Note: it only waits for the container to start, not for the application inside to be ready (unless using healthchecks).",
    command: "depends_on:",
    examples: [
      { title: "Wait for DB", code: "services:\n  web:\n    depends_on:\n      - db\n  db:\n    image: postgres", description: "Web starts after DB container." },
      { title: "Condition (Health)", code: "depends_on:\n  db:\n    condition: service_healthy", description: "Wait for HEALTHCHECK to pass!" },
      { title: "Condition (Complete)", code: "depends_on:\n  job:\n    condition: service_completed_successfully", description: "Wait for job to finish." },
      { title: "Condition (Started)", code: "depends_on:\n  db:\n    condition: service_started", description: "Default behavior." },
      { title: "Multiple Deps", code: "depends_on:\n  - db\n  - redis", description: "Wait for list." },
      { title: "Startup Order", code: "# Compose starts dependency graph from leaves up", description: "Behavior." },
      { title: "Limit", code: "# Does not handle runtime crashes of dependency", description: "Warning." },
      { title: "Restart", code: "restart: on-failure", description: "Use restart policies with depends_on." },
      { title: "App Logic", code: "# App should still retry connections!", description: "Best practice." },
      { title: "Circular", code: "# Circular dependencies are not allowed", description: "Constraint." }
    ]
  },
  57: {
    longDescription: "Add environment variables to your containers. You can use an array or a dictionary. 'env_file' loads variables from an external file (e.g., .env). This is the standard way to configure 12-factor apps.",
    command: "environment:",
    examples: [
      { title: "List Syntax", code: "environment:\n  - NODE_ENV=production\n  - DB_HOST=db", description: "Array format." },
      { title: "Map Syntax", code: "environment:\n  NODE_ENV: production\n  DB_HOST: db", description: "Dictionary format." },
      { title: "Env File", code: "env_file:\n  - .env", description: "Load from file." },
      { title: "Pass-through", code: "environment:\n  - SESSION_SECRET", description: "Pass from host shell env." },
      { title: "Interpolation", code: "environment:\n  - URL=${HOST_URL}", description: "Use .env variable." },
      { title: "Multiple Files", code: "env_file:\n  - .env.common\n  - .env.local", description: "Merge config files." },
      { title: "Priority", code: "# environment > env_file", description: "Order of precedence." },
      { title: "Quote", code: "environment:\n  - KEY=\"value with spaces\"", description: "Syntax." },
      { title: "Empty", code: "environment:\n  - DEBUG=", description: "Set empty string." },
      { title: "Secrets", code: "# Use 'secrets' for sensitive data instead", description: "Security tip." }
    ]
  },
  58: {
    longDescription: "Expose ports. SHORT syntax: HOST:CONTAINER. This maps a port on the host machine to a port in the container. 'expose' (without mapping) only documents the port for other services or links, it doesn't publish to host.",
    command: "ports:",
    examples: [
      { title: "Map Ports", code: "ports:\n  - \"3000:3000\"\n  - \"8080:80\"", description: "Host:Container." },
      { title: "Only Expose", code: "expose:\n  - \"80\"", description: "Internal network only." },
      { title: "Range", code: "ports:\n  - \"8000-8010:8000-8010\"", description: "Map range." },
      { title: "Protocol", code: "ports:\n  - \"53:53/udp\"", description: "UDP mapping." },
      { title: "Specific IP", code: "ports:\n  - \"127.0.0.1:8001:8001\"", description: "Bind to localhost only." },
      { title: "Random Host Port", code: "ports:\n  - \"80\"", description: "Maps random ephemeral port to 80." },
      { title: "Long Syntax", code: "ports:\n  - target: 80\n    published: 8080\n    protocol: tcp\n    mode: host", description: "Verbose mode." },
      { title: "No Quotes", code: "# Always quote \"80:80\" to avoid YAML octal parsing!", description: "YAML Gotcha." },
      { title: "Ingress", code: "# Swarm mode uses ingress mesh", description: "Swarm note." },
      { title: "Conflict", code: "# Fails if host port is taken", description: "Error." }
    ]
  },
  59: {
    longDescription: "Mount host paths or named volumes. Named volumes need to be defined in the top-level 'volumes' key. Bind mounts are relative to the compose file location.",
    command: "volumes:",
    examples: [
      { title: "Bind Mount", code: "volumes:\n  - ./data:/data", description: "Host path mapping." },
      { title: "Named Volume", code: "volumes:\n  - db_data:/var/lib/mysql", description: "Reference named volume." },
      { title: "Read Only", code: "volumes:\n  - ./conf:/etc/conf:ro", description: "Prevent modification." },
      { title: "Top-level Def", code: "volumes:\n  db_data:", description: "Must exist at bottom of file." },
      { title: "Long Syntax", code: "volumes:\n  - type: volume\n    source: mydata\n    target: /data", description: "Clearer configuration." },
      { title: "Tmpfs", code: "volumes:\n  - type: tmpfs\n    target: /run/secrets", description: "Memory mount." },
      { title: "Anonymous", code: "volumes:\n  - /var/lib/mysql", description: "No source specified." },
      { title: "Consistency", code: "volumes:\n  - .:/app:cached", description: "Mac file sync tuning." },
      { title: "External Vol", code: "volumes:\n  data:\n    external: true", description: "Use pre-existing volume." },
      { title: "Bind Propagation", code: "bind:\n  propagation: shared", description: "Advanced mount." }
    ]
  },
  60: {
    longDescription: "Networks in Docker Compose allow your services to communicate with each other. By default, Compose sets up a single network for your app. You can define custom networks for isolation (e.g., frontend, backend).",
    command: "networks:",
    examples: [
      { title: "Custom Network", code: "networks:\n  frontend:\n  backend:\n\nservices:\n  app:\n    networks:\n      - frontend", description: "Service attached to specific net." },
      { title: "Service Alias", code: "networks:\n  frontend:\n    aliases:\n      - my-app", description: "DNS alias." },
      { title: "External Network", code: "networks:\n  shared_net:\n    external: true", description: "Connect to existing network." },
      { title: "Specify Driver", code: "networks:\n  my-net:\n    driver: bridge", description: "Driver type." },
      { title: "Static IP", code: "networks:\n  my-net:\n    ipv4_address: 172.16.0.2", description: "Fixed IP (needs subnet)." },
      { title: "Subnet Config", code: "networks:\n  my-net:\n    ipam:\n      config:\n        - subnet: 172.16.0.0/24", description: "Define range." },
      { title: "Default Name", code: "# Network named 'project_default'", description: "Automatic behavior." },
      { title: "Overlap", code: "services:\n  proxy:\n    networks:\n      - frontend\n      - backend", description: "Bridge two networks." },
      { title: "Internal", code: "networks:\n  secure:\n    internal: true", description: "No internet access." },
      { title: "Host Mode", code: "network_mode: host", description: "Skip networks key." }
    ]
  },
  61: {
    longDescription: "Configuration options that are applied at build time. Can be specified either as a string containing a path to the build context, or an object with path and other arguments like Dockerfile name, target, and args. When you run 'docker compose build', these instructions are executed.",
    command: "build:",
    examples: [
      { title: "Simple Build", code: "build: ./dir", description: "Path to directory with Dockerfile." },
      { title: "Advanced Build", code: "build:\n  context: .\n  dockerfile: Dockerfile.dev\n  args:\n    buildno: 1", description: "Specific file and args." },
      { title: "Target Stage", code: "build:\n  context: .\n  target: production", description: "Multi-stage build target." },
      { title: "Network", code: "build:\n  network: host", description: "Network mode during build." },
      { title: "Cache From", code: "build:\n  cache_from:\n    - my-image:latest", description: "CI optimization." },
      { title: "Inline Args", code: "args:\n  - GIT_COMMIT", description: "Pass arg without value (from env)." },
      { title: "Labels", code: "build:\n  labels:\n    - \"com.example.description=Accounting webapp\"", description: "Metadata." },
      { title: "Shm Size", code: "build:\n  shm_size: '2gb'", description: "Shared memory for build." },
      { title: "Secrets", code: "build:\n  secrets:\n    - npm_token", description: "Secure build secrets." },
      { title: "No Cache", code: "# Use CLI flag: docker compose build --no-cache", description: "Runtime override." }
    ]
  },
  62: {
    longDescription: "Builds, (re)creates, starts, and attaches to containers for a service. Unless they are already running, this command starts containers. It aggregates the output of each container. This is the main command to start your dev environment.",
    command: "docker compose up",
    examples: [
      { title: "Start detached", code: "docker compose up -d", description: "Run in background (common for servers)." },
      { title: "Force Recreate", code: "docker compose up --force-recreate", description: "Recreate containers even if config didn't change." },
      { title: "Build and Start", code: "docker compose up --build", description: "Rebuild images before starting." },
      { title: "Specific Service", code: "docker compose up db", description: "Start only the database." },
      { title: "Remove Orphans", code: "docker compose up --remove-orphans", description: "Cleanup containers not in Compose file." },
      { title: "No Deps", code: "docker compose up --no-deps web", description: "Don't start linked services." },
      { title: "Abort on Exit", code: "docker compose up --abort-on-container-exit", description: "Stop all if one stops (good for tests)." },
      { title: "Timeout", code: "docker compose up -t 30", description: "Shutdown timeout." },
      { title: "Quiet", code: "docker compose up -d --quiet-pull", description: "Less noise." },
      { title: "Exit Code", code: "docker compose up --exit-code-from test-runner", description: "Return specific service exit code." }
    ]
  },
  63: {
    longDescription: "Stops containers and removes containers, networks, volumes, and images created by 'up'. By default, the only thing removed are containers and networks defined in the Compose file. It does NOT remove volumes by default to prevent data loss.",
    command: "docker compose down",
    examples: [
      { title: "Stop & Remove", code: "docker compose down", description: "Standard teardown." },
      { title: "Remove Volumes", code: "docker compose down -v", description: "Also delete named volumes (Danger!)." },
      { title: "Remove Images", code: "docker compose down --rmi all", description: "Delete all images used by services." },
      { title: "Remove Local Images", code: "docker compose down --rmi local", description: "Delete only custom built images." },
      { title: "Remove Orphans", code: "docker compose down --remove-orphans", description: "Clean up undefined containers." },
      { title: "Timeout", code: "docker compose down -t 5", description: "Quick shutdown." },
      { title: "Reset Env", code: "# 'down -v' is the best way to reset your dev DB", description: "Tip." },
      { title: "Network Removal", code: "# Removes the custom network automatically", description: "Behavior." },
      { title: "Preserve External", code: "# External volumes/networks are NEVER removed", description: "Safety." },
      { title: "Clean Slate", code: "docker compose down -v --rmi all --remove-orphans", description: "Nuke everything." }
    ]
  },
  64: {
    longDescription: "Builds or rebuilds services. Services are built once and then tagged, by default as project_service. Use this when you've changed code in your Dockerfile or build context but don't want to start the app yet.",
    command: "docker compose build",
    examples: [
      { title: "Build All", code: "docker compose build", description: "Builds all services with 'build' key." },
      { title: "No Cache", code: "docker compose build --no-cache", description: "Full rebuild." },
      { title: "Pull Base", code: "docker compose build --pull", description: "Update FROM images." },
      { title: "Build Args", code: "docker compose build --build-arg VER=1.0", description: "Pass args." },
      { title: "Parallel", code: "docker compose build --parallel", description: "Build concurrently (default in v2)." },
      { title: "Specific Service", code: "docker compose build web", description: "Target one service." },
      { title: "Progress", code: "docker compose build --progress plain", description: "See full logs." },
      { title: "Memory", code: "docker compose build --memory 2gb", description: "Limit build memory." },
      { title: "SSH", code: "docker compose build --ssh default", description: "Forward SSH agent." },
      { title: "Push", code: "docker compose build --push", description: "Build and push immediately (v2)." }
    ]
  },
  65: {
    longDescription: "Displays log output from services. Events are logged from the container's stdout and stderr. Can follow logs (stream) or show recent logs.",
    command: "docker compose logs",
    examples: [
      { title: "Follow Logs", code: "docker compose logs -f", description: "Stream all logs (Ctrl+C to stop)." },
      { title: "Specific Service", code: "docker compose logs -f web", description: "Stream one service." },
      { title: "Tail Logs", code: "docker compose logs --tail=100", description: "Show last 100 lines." },
      { title: "No Color", code: "docker compose logs --no-color", description: "Plain text output." },
      { title: "No Timestamps", code: "docker compose logs --no-log-prefix", description: "Hide service names." },
      { title: "Timestamps", code: "docker compose logs -t", description: "Show date/time." },
      { title: "Dump to File", code: "docker compose logs --no-color > app.log", description: "Save logs." },
      { title: "Since", code: "docker compose logs --since 10m", description: "Recent logs only." },
      { title: "Until", code: "docker compose logs --until 1h", description: "Old logs." },
      { title: "Grep", code: "docker compose logs | grep Error", description: "Find errors." }
    ]
  },
  66: {
    longDescription: "Execute a command in a running container. This is equivalent to 'docker exec' but you can use the service name instead of the container ID. Useful for running migrations, shells, or management commands.",
    command: "docker compose exec <service> <command>",
    examples: [
      { title: "Open Shell", code: "docker compose exec web bash", description: "Interactive shell." },
      { title: "Run Command", code: "docker compose exec db psql -U postgres", description: "Database CLI." },
      { title: "Run as User", code: "docker compose exec -u root web apk add curl", description: "Install tool as root." },
      { title: "Set Env", code: "docker compose exec -e DEBUG=1 web ./script", description: "One-off env var." },
      { title: "Detached", code: "docker compose exec -d web touch /tmp/ready", description: "Run in background." },
      { title: "Workdir", code: "docker compose exec -w /tmp web pwd", description: "Change directory." },
      { title: "No TTY", code: "docker compose exec -T web echo 'pipe me'", description: "Disable pseudo-tty (for piping)." },
      { title: "All Instances", code: "docker compose exec --index=1 web hostname", description: "Target specific replica." },
      { title: "Privileged", code: "docker compose exec --privileged web ...", description: "Gain capabilities." },
      { title: "Check Env", code: "docker compose exec web env", description: "Debug variables." }
    ]
  },
  67: {
    longDescription: "Scale services to run multiple instances (containers). This requires the service to not bind to a specific host port (use ranges or internal ports only), otherwise the ports will conflict. Useful for testing load balancing.",
    command: "docker compose up --scale <service>=<num>",
    examples: [
      { title: "Scale Up", code: "docker compose up -d --scale worker=3", description: "Start 3 workers." },
      { title: "Scale Down", code: "docker compose up -d --scale worker=1", description: "Reduce to 1." },
      { title: "Compose File", code: "deploy:\n  replicas: 3", description: "Define in YAML (v3)." },
      { title: "Port Range", code: "ports:\n  - \"8000-8010:80\"", description: "Allow scaling web service." },
      { title: "Inspect", code: "docker compose ps", description: "See all replicas." },
      { title: "Load Balancing", code: "# Docker internal DNS round-robins requests", description: "Behavior." },
      { title: "Stateful", code: "# Scaling stateful apps (DBs) is hard!", description: "Warning." },
      { title: "Restart", code: "docker compose restart worker", description: "Restarts all 3 instances." },
      { title: "Logs", code: "docker compose logs worker", description: "Interleaved logs from all 3." },
      { title: "Exec", code: "docker compose exec --index=2 worker hostname", description: "Target specific instance." }
    ]
  },
  68: {
    longDescription: "By default, Compose reads two files, a docker-compose.yml and an optional docker-compose.override.yml. By convention, the docker-compose.yml contains your base configuration. The override file, as its name implies, can contain configuration overrides for existing services or entirely new services.",
    command: "docker compose -f ... -f ... up",
    examples: [
      { title: "Use Override", code: "docker compose up", description: "Auto-loads docker-compose.override.yml." },
      { title: "Explicit Files", code: "docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d", description: "Merge prod config." },
      { title: "View Config", code: "docker compose config", description: "Show the final merged YAML." },
      { title: "Dev Override", code: "# Override command to run with nodemon", description: "Use case." },
      { title: "Prod Override", code: "# Set restart: always and expose ports", description: "Use case." },
      { title: "Test Override", code: "# Use mock database", description: "Use case." },
      { title: "Merge Rules", code: "# Arrays merge, single values overwrite", description: "Behavior." },
      { title: "Env File", code: "docker compose --env-file .env.prod up", description: "Load specific .env." },
      { title: "Project Name", code: "docker compose -p prod up", description: "Namespace stack." },
      { title: "CI Pipeline", code: "docker compose -f docker-compose.ci.yml up --abort-on-container-exit", description: "CI pattern." }
    ]
  },
  69: {
    longDescription: "Use different Compose files for different environments (development, testing, production) to keep configurations clean and specific. Don't put build logic in production files, and don't put production secrets in development files.",
    command: "docker compose -f docker-compose.prod.yml up -d",
    examples: [
      { title: "Prod Command", code: "docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d", description: "Layer prod over base." },
      { title: "Base File", code: "# shared services, networks, volumes", description: "Content." },
      { title: "Dev File", code: "# build contexts, vol mounts, debug ports", description: "Content." },
      { title: "Prod File", code: "# restart policies, real secrets, no builds", description: "Content." },
      { title: "Scripting", code: "export COMPOSE_FILE=docker-compose.yml:docker-compose.prod.yml", description: "Set default files." },
      { title: "Validation", code: "docker compose -f docker-compose.prod.yml config", description: "Check validity." },
      { title: "Secrets", code: "# Prod uses external secrets, Dev uses file secrets", description: "Pattern." },
      { title: "Images", code: "# Prod uses tagged images, Dev uses 'build: .'", description: "Pattern." },
      { title: "Ports", code: "# Prod binds to specific IP, Dev binds to localhost", description: "Pattern." },
      { title: "Logging", code: "# Prod ships logs, Dev prints to stdout", description: "Pattern." }
    ]
  },
  70: {
    longDescription: "Docker Hub is a service provided by Docker for finding and sharing container images with your team. It provides the following major features: Repositories, Builds, Webhooks, Organizations. It has rate limits for anonymous pulls.",
    command: "https://hub.docker.com",
    examples: [
      { title: "Login", code: "docker login", description: "Authenticate to access private repos." },
      { title: "Push Image", code: "docker push myorg/myimage:tag", description: "Upload." },
      { title: "Create Repo", code: "# Create on website first (usually)", description: "Workflow." },
      { title: "Description", code: "# Update README.md on Hub via hooks", description: "Feature." },
      { title: "Webhooks", code: "# Trigger CI on push", description: "Automation." },
      { title: "Rate Limits", code: "# 100 pulls/6hr (anon), 200 (free user)", description: "Constraint." },
      { title: "Official Images", code: "# Library images are scanned and maintained", description: "Security." },
      { title: "Teams", code: "# Manage access control (Read/Write/Admin)", description: "Organization." },
      { title: "2FA", code: "# Enable Two-Factor Authentication", description: "Security." },
      { title: "Access Token", code: "# Use PATs instead of passwords for CLI", description: "Best practice." }
    ]
  },
  71: {
    longDescription: "A private registry is a locally hosted version of Docker Hub. It allows you to store and manage your own Docker images securely within your own infrastructure. The official 'registry' image makes this easy.",
    command: "docker run -d -p 5000:5000 --name registry registry:2",
    examples: [
      { title: "Run Registry", code: "docker run -d -p 5000:5000 --restart always --name registry registry:2", description: "Start local registry." },
      { title: "Tag for Local", code: "docker tag my-image localhost:5000/my-image", description: "Point to localhost:5000." },
      { title: "Push to Local", code: "docker push localhost:5000/my-image", description: "Upload." },
      { title: "Pull from Local", code: "docker pull localhost:5000/my-image", description: "Download." },
      { title: "Storage", code: "docker run -v /mnt/registry:/var/lib/registry ...", description: "Persist images." },
      { title: "Insecure Registry", code: "dockerd --insecure-registry myregistry:5000", description: "Allow HTTP (non-TLS)." },
      { title: "Auth", code: "# Configure htpasswd for basic auth", description: "Security." },
      { title: "TLS", code: "# Mount certs for HTTPS", description: "Security." },
      { title: "UI", code: "# Run 'docker-registry-ui' container for frontend", description: "Tooling." },
      { title: "Mirror", code: "# Configure as pull-through cache for Hub", description: "Optimization." }
    ]
  },
  72: {
    longDescription: "Major cloud providers offer managed Docker registries (ECR, GCR, ACR) that integrate tightly with their container services (ECS, GKE, AKS). These are private, secure, and highly available.",
    command: "aws ecr get-login-password | docker login ...",
    examples: [
      { title: "Login AWS ECR", code: "aws ecr get-login-password --region region | docker login --username AWS --password-stdin account.dkr.ecr.region.amazonaws.com", description: "Auth token lasts 12 hours." },
      { title: "Login Google GCR", code: "gcloud auth configure-docker", description: "Configures credential helper." },
      { title: "Login Azure ACR", code: "az acr login --name myregistry", description: "Uses Azure CLI." },
      { title: "Tag ECR", code: "docker tag app 123.dkr.ecr.us-east-1.amazonaws.com/app:v1", description: "Long URL syntax." },
      { title: "Push ECR", code: "docker push 123.dkr.ecr.us-east-1.amazonaws.com/app:v1", description: "Upload." },
      { title: "Lifecycle Policy", code: "# Auto-delete old images", description: "Feature." },
      { title: "Scanning", code: "# Auto-scan for CVEs on push", description: "Feature." },
      { title: "IAM", code: "# EC2 instances can pull without docker login", description: "Integration." },
      { title: "Replication", code: "# Replicate images across regions", description: "Feature." },
      { title: "Immutable Tags", code: "# Prevent overwriting tags", description: "Security." }
    ]
  },
  73: {
    longDescription: "Tagging images properly is crucial for version control. Semantic Versioning (SemVer) is the recommended standard (e.g., v1.0.0). Always tag with specific versions, not just 'latest'.",
    command: "docker tag",
    examples: [
      { title: "SemVer Tags", code: "docker tag myapp:latest myapp:1.0.0", description: "Major.Minor.Patch." },
      { title: "Moving Tags", code: "docker tag myapp:1.0.1 myapp:1.0", description: "Update '1.0' to point to '1.0.1'." },
      { title: "Git Hash", code: "docker tag myapp myapp:sha-a1b2c3d", description: "Traceability." },
      { title: "Build Number", code: "docker tag myapp myapp:build-123", description: "CI Reference." },
      { title: "Latest Pattern", code: "# 'latest' should point to the most recent STABLE release", description: "Convention." },
      { title: "Environment", code: "docker tag myapp myapp:staging", description: "Deploy target." },
      { title: "Multiple Tags", code: "docker push myapp:1.0.0 && docker push myapp:1.0", description: "Push all aliases." },
      { title: "Overwrite", code: "# Tags are mutable. Digests are not.", description: "Fact." },
      { title: "Pinning", code: "FROM node:18.12.1", description: "Usage in Dockerfile." },
      { title: "Locking", code: "# Use immutable tags in production", description: "Best practice." }
    ]
  },
  74: {
    longDescription: "Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox. It is often used as a base image for Docker containers to keep image sizes small (5MB vs 100MB+ for Debian). However, it uses musl instead of glibc, which can cause compatibility issues with some binaries.",
    command: "FROM alpine:latest",
    examples: [
      { title: "Use Alpine", code: "FROM node:18-alpine", description: "Standard choice for Node." },
      { title: "Install Pkgs", code: "RUN apk add --no-cache curl", description: "Use 'apk' not 'apt'." },
      { title: "No Cache", code: "# --no-cache avoids needing 'apk update'", description: "Optimization." },
      { title: "Shell", code: "/bin/sh", description: "Bash is not installed by default." },
      { title: "User", code: "RUN adduser -D myuser", description: "Create user." },
      { title: "DNS", code: "# Alpine handles DNS slightly differently", description: "Gotcha." },
      { title: "Python", code: "# Python wheels might need compiling on Alpine", description: "Gotcha." },
      { title: "Debug", code: "docker run -it alpine sh", description: "Look around." },
      { title: "Versions", code: "FROM alpine:3.14", description: "Pin version." },
      { title: "Scratch", code: "# Alpine is the smallest functional OS", description: "Fact." }
    ]
  },
  75: {
    longDescription: "Each instruction in a Dockerfile creates a layer. To reduce the image size and number of layers, chain multiple commands into a single RUN instruction using '&&'. This ensures that temporary files created and deleted in the same step are not persisted in the final image history.",
    command: "RUN ... && ...",
    examples: [
      { title: "Chain Commands", code: "RUN apt-get update && apt-get install -y \\\n    package1 \\\n    package2 \\\n && rm -rf /var/lib/apt/lists/*", description: "The golden pattern." },
      { title: "Bad Pattern", code: "RUN apt-get update\nRUN apt-get install -y curl", description: "Creates 2 layers. Cache is bloated." },
      { title: "Line Continuation", code: "\\ (backslash)", description: "Use for readability." },
      { title: "Group Ops", code: "RUN mkdir /app && cd /app && touch file", description: "Keep context." },
      { title: "Fail Fast", code: "set -e", description: "Ensure chain fails if one cmd fails." },
      { title: "Squash", code: "docker build --squash .", description: "Experimental: Merge all layers at end." },
      { title: "Multi-Stage", code: "# Reduces need for manual chaining in build stage", description: "Alternative." },
      { title: "Readable", code: "# Sort arguments alphabetically", description: "Best practice." },
      { title: "Heredocs", code: "RUN <<EOF\napt-get update\napt-get install -y curl\nEOF", description: "Newer cleaner syntax." },
      { title: "Layer Count", code: "docker history my-image", description: "Verify your work." }
    ]
  },
  76: {
    longDescription: "When installing packages, package managers (apt, apk, yum) download index files. These should be removed in the same RUN instruction to prevent them from being stored in the layer. If you do it in a separate RUN, the data is already baked into the previous layer.",
    command: "rm -rf /var/lib/apt/lists/*",
    examples: [
      { title: "Clean Apt", code: "RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*", description: "Debian/Ubuntu." },
      { title: "Clean Apk", code: "RUN apk add --no-cache curl", description: "Alpine (automatic with flag)." },
      { title: "Clean Yum", code: "RUN yum install -y curl && yum clean all", description: "CentOS/RHEL." },
      { title: "Dnf", code: "RUN dnf install -y curl && dnf clean all", description: "Fedora." },
      { title: "Pip Cache", code: "RUN pip install --no-cache-dir -r requirements.txt", description: "Python." },
      { title: "Npm Cache", code: "RUN npm ci && npm cache clean --force", description: "Node.js." },
      { title: "Gem Cache", code: "RUN gem install bundler --no-document", description: "Ruby." },
      { title: "Why?", code: "# Can save 20-50MB per image", description: "Impact." },
      { title: "Auto-remove", code: "apt-get install -y --no-install-recommends", description: "Install fewer deps." },
      { title: "Verify", code: "docker run -it my-image du -sh /var/lib/apt", description: "Check size." }
    ]
  },
  77: {
    longDescription: "Using .dockerignore prevents unnecessary files from being sent to the Docker daemon, speeding up the build and reducing image size. It's like .gitignore but for the build context. Sending 500MB of node_modules to the daemon is slow and wasteful.",
    command: ".dockerignore",
    examples: [
      { title: "Ignore Git", code: ".git", description: "Don't copy git history." },
      { title: "Ignore Deps", code: "node_modules\nvendor\ntarget", description: "Don't copy local deps." },
      { title: "Ignore Secrets", code: ".env\n*.key", description: "Security." },
      { title: "Ignore Logs", code: "*.log", description: "Cleanliness." },
      { title: "Ignore Docker", code: "Dockerfile\ndocker-compose.yml", description: "Don't copy build config." },
      { title: "Whitelist", code: "*\n!src/\n!package.json", description: "Ignore all, then allow specific." },
      { title: "Context Size", code: "# Watch the 'Sending build context' line", description: "Metric." },
      { title: "Copy Command", code: "COPY . .", description: ".dockerignore filters this command." },
      { title: "Syntax", code: "# Same as glob patterns", description: "Easy to learn." },
      { title: "Test", code: "docker build .", description: "Check build time." }
    ]
  },
  78: {
    longDescription: "Multi-stage builds allow you to use a heavy image for building your app (with compilers, headers) and a tiny image for running it, discarding the build tools. This is the most effective way to reduce image size for compiled languages or apps with build steps.",
    command: "FROM ... AS ...",
    examples: [
      { title: "Go Example", code: "FROM golang AS builder\n...\nFROM alpine\nCOPY --from=builder /app/bin /app/bin", description: "Standard." },
      { title: "Static Site", code: "FROM node AS build\n...\nFROM nginx\nCOPY --from=build /app/dist /html", description: "Frontend." },
      { title: "Aliases", code: "FROM node:18 AS deps", description: "Name stages." },
      { title: "External Image", code: "COPY --from=nginx:alpine /etc/nginx/conf.d /etc/nginx/conf.d", description: "Steal files." },
      { title: "Target", code: "docker build --target builder", description: "Debug intermediate stage." },
      { title: "Cache", code: "# Stages are cached independently", description: "Benefit." },
      { title: "Secrets", code: "# Build secrets don't leak to final image", description: "Security." },
      { title: "Java", code: "FROM maven AS build\n...\nFROM openjdk:jre", description: "Java." },
      { title: "Rust", code: "FROM rust AS build\n...\nFROM debian:slim", description: "Rust." },
      { title: "Python", code: "FROM python AS build\n...\nFROM python:slim\nCOPY --from=build /root/.local /root/.local", description: "Python venv." }
    ]
  },
  79: {
    longDescription: "Analyzing image size helps identify bloat. Use 'docker history' or tools like 'dive' to inspect layer contents and size. Small images start faster, transfer faster, and are more secure (smaller attack surface).",
    command: "docker history",
    examples: [
      { title: "Check Size", code: "docker images", description: "Overall size." },
      { title: "Inspect Layers", code: "docker history my-image", description: "Layer breakdown." },
      { title: "Dive Tool", code: "dive my-image", description: "Interactive TUI analysis (External tool)." },
      { title: "Format", code: "docker history --format \"{{.Size}}\t{{.CreatedBy}}\"", description: "Clean output." },
      { title: "Sort", code: "docker images --format \"{{.Size}}\t{{.Repository}}\" | sort -h", description: "Find largest images." },
      { title: "Prune", code: "docker system prune", description: "Free space." },
      { title: "Dedup", code: "# Layers with same hash are stored once", description: "Fact." },
      { title: "Base Image", code: "# Check base image size first", description: "Tip." },
      { title: "Ncdu", code: "docker run -it -v /:/host -v /var/run/docker.sock:/var/run/docker.sock rothgar/ncdu /host", description: "Disk usage analyzer." },
      { title: "Export", code: "docker save my-image | wc -c", description: "Tarball size." }
    ]
  },
  80: {
    longDescription: "Running containers as 'root' (default) is a security risk. If an attacker breaks out of the container, they could have root access to the host. Always define a USER instruction in your Dockerfile to switch to a least-privileged user.",
    command: "USER <uid>:<gid>",
    examples: [
      { title: "Dockerfile Example", code: "FROM node:18\nRUN groupadd -r app && useradd -r -g app app\nUSER app\nCMD [\"node\", \"index.js\"]", description: "Create and switch." },
      { title: "Runtime Override", code: "docker run --user 1001:1001 my-image", description: "Force run as specific user ID." },
      { title: "Check Current", code: "docker run my-image whoami", description: "Verify user." },
      { title: "File Permissions", code: "chown -R app:app /app", description: "Must own files." },
      { title: "Bind Mounts", code: "# UID inside must match UID outside for writes", description: "Linux issue." },
      { title: "Rootless Docker", code: "# Run the daemon itself as non-root", description: "Advanced security." },
      { title: "Pod Security", code: "runAsNonRoot: true", description: "Kubernetes context." },
      { title: "Port Binding", code: "# Non-root cannot bind ports < 1024", description: "Limitation." },
      { title: "Official Images", code: "USER node", description: "Many have users pre-created." },
      { title: "OpenShift", code: "# Forces random UID usage", description: "Platform behavior." }
    ]
  },
  81: {
    longDescription: "Run the container with a read-only filesystem. This prevents the application (or an attacker) from writing to the container's filesystem, enforcing immutability. If the app needs to write data, you must explicitly mount a volume or tmpfs at that location. This is a high-security setting.",
    command: "docker run --read-only",
    examples: [
      { title: "Read Only Run", code: "docker run --read-only -v /tmp my-app", description: "Root is RO, /tmp is writable." },
      { title: "Tmpfs", code: "docker run --read-only --tmpfs /run --tmpfs /tmp nginx", description: "Standard nginx secure config." },
      { title: "Compose", code: "read_only: true", description: "Set in YAML." },
      { title: "Verify", code: "docker exec my-container touch /root/file", description: "Should fail: Read-only file system." },
      { title: "Attack Surface", code: "# Malware cannot persist or modify binaries", description: "Benefit." },
      { title: "Stateless", code: "# Enforces stateless application design", description: "Benefit." },
      { title: "Logging", code: "# App must log to stdout, not file", description: "Requirement." },
      { title: "Pid File", code: "# Mount tmpfs at /var/run for pid files", description: "Requirement." },
      { title: "Cache", code: "# Mount volume for cache directories", description: "Requirement." },
      { title: "Compliance", code: "# Often required by SOC2/PCI", description: "Context." }
    ]
  },
  82: {
    longDescription: "Docker secrets allow you to store and manage sensitive information, such as passwords, SSH keys, and SSL certificates. Secrets are encrypted at rest and in transit. They are only available to services that have been explicitly granted access to them, and they are mounted into the container as files in /run/secrets/.",
    command: "docker secret create",
    examples: [
      { title: "Create Secret", code: "echo \"mysecretpassword\" | docker secret create db_pass -", description: "From stdin." },
      { title: "From File", code: "docker secret create cert ./cert.pem", description: "From file." },
      { title: "Use in Service", code: "docker service create --name db --secret db_pass postgres", description: "Grant access." },
      { title: "Swarm Only", code: "# Docker Secrets only work in Swarm mode (not plain run)", description: "Constraint." },
      { title: "Compose (Swarm)", code: "secrets:\n  my_secret:\n    external: true", description: "YAML syntax." },
      { title: "Compose (Dev)", code: "# Compose v2 can emulate secrets using file mounts", description: "Dev feature." },
      { title: "Access in App", code: "cat /run/secrets/db_pass", description: "Read the file." },
      { title: "List Secrets", code: "docker secret ls", description: "Management." },
      { title: "Update Secret", code: "# Secrets are immutable. Create new version, update service.", description: "Rotation." },
      { title: "Env Var", code: "# NEVER use ENV for secrets. Use this instead.", description: "Warning." }
    ]
  },
  83: {
    longDescription: "Regularly scan your images for known vulnerabilities (CVEs). Docker Desktop includes 'docker scout' (formerly scan) for this purpose. This helps you identify and fix security flaws in your base images and dependencies before deploying.",
    command: "docker scout quickview <image>",
    examples: [
      { title: "Quick Scan", code: "docker scout quickview nginx:latest", description: "Summary of critical/high vulnerabilities." },
      { title: "Deep Scan", code: "docker scout cves nginx:latest", description: "Detailed list." },
      { title: "Compare", code: "docker scout compare --to nginx:alpine nginx:debian", description: "Which is safer?" },
      { title: "Recommendations", code: "docker scout recommendations nginx", description: "How to fix." },
      { title: "Trivy", code: "docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image python:3.4-alpine", description: "Alternative tool." },
      { title: "Snyk", code: "snyk container test my-image", description: "Commercial tool." },
      { title: "CI Integration", code: "# Fail build if critical CVEs found", description: "Automation." },
      { title: "Base Image", code: "# Most CVEs come from the OS layer. Update often.", description: "Fact." },
      { title: "Ignore", code: "# whitelist known false positives", description: "Config." },
      { title: "SBOM", code: "docker sbom my-image", description: "Generate Software Bill of Materials." }
    ]
  },
  84: {
    longDescription: "By default, Docker containers run with a subset of Linux capabilities. You can drop all capabilities and add back only what is needed for maximum security. This is 'least privilege' for kernel features.",
    command: "--cap-drop ALL --cap-add ...",
    examples: [
      { title: "Drop All", code: "docker run --cap-drop ALL nginx", description: "Safest default." },
      { title: "Add Net Admin", code: "docker run --cap-add NET_ADMIN my-vpn", description: "Allow modifying network interfaces." },
      { title: "Add Chown", code: "docker run --cap-add CHOWN my-app", description: "Allow file ownership changes." },
      { title: "Add Sys Admin", code: "docker run --privileged", description: "Dangerous! Adds all caps." },
      { title: "Check Caps", code: "docker container inspect -f '{{.HostConfig.CapAdd}}' my-c", description: "Audit." },
      { title: "Ping", code: "docker run --cap-drop NET_RAW alpine ping google.com", description: "Fails because ping needs NET_RAW." },
      { title: "Compose", code: "cap_drop:\n  - ALL\ncap_add:\n  - NET_BIND_SERVICE", description: "YAML syntax." },
      { title: "Binding Low Ports", code: "# Needs NET_BIND_SERVICE to bind < 1024 as non-root", description: "Use case." },
      { title: "Time", code: "docker run --cap-add SYS_TIME my-ntp", description: "Allow changing system clock." },
      { title: "Kernel Exploits", code: "# Fewer caps = smaller attack surface", description: "Reasoning." }
    ]
  },
  85: {
    longDescription: "Using the 'latest' tag in production is a dangerous anti-pattern. 'latest' is just a mutable pointer that can change at any time. If you deploy 'postgres:latest' today, it might be version 14. Tomorrow, it might be version 15, which could break your application. Always pin your images to specific versions (tags) or, even better, to immutable SHA256 digests.",
    command: "docker pull image:tag",
    examples: [
      { title: "Bad Practice", code: "FROM node:latest", description: "Unpredictable builds." },
      { title: "Good Practice", code: "FROM node:18.16.0-alpine", description: "Stable, but tag can be overwritten." },
      { title: "Best Practice (Digest)", code: "FROM node@sha256:5d0e2...", description: "Cryptographically immutable. 100% reproducible." },
      { title: "Updating", code: "# You must manually update the tag to upgrade", description: "Trade-off." },
      { title: "Rollback", code: "# Easy to revert to previous tag if pinned", description: "Benefit." },
      { title: "Caching", code: "# 'latest' confuses caching strategies", description: "Issue." },
      { title: "Renovate/Dependabot", code: "# Use tools to automate tag updates", description: "Solution." },
      { title: "Latest != Newest", code: "# A maintained v12 tag might be newer than a stale latest", description: "Fact." },
      { title: "SemVer", code: "image: app:1.2.3", description: "Communicate breaking changes." },
      { title: "Lock File", code: "# Digests act like a package-lock.json for images", description: "Analogy." }
    ]
  },
  86: {
    longDescription: "By default, a container has no resource constraints and can use as much of a given resource as the host's kernel scheduler allows. Use limits to prevent a single container from exhausting host resources (DoS).",
    command: "--memory, --cpus",
    examples: [
      { title: "Limit RAM", code: "docker run --memory=\"512m\" nginx", description: "OOM Kill if exceeded." },
      { title: "Limit CPU", code: "docker run --cpus=\"1.5\" nginx", description: "Max 1.5 cores." },
      { title: "Memory Swap", code: "docker run --memory-swap=\"1g\" ...", description: "Allow swap usage." },
      { title: "CPU Shares", code: "docker run --cpu-shares 512 ...", description: "Relative weight (default 1024)." },
      { title: "Update Running", code: "docker update --cpus 2 my-container", description: "Dynamic scaling." },
      { title: "Compose v2", code: "deploy:\n  resources:\n    limits:\n      cpus: '0.50'\n      memory: 50M", description: "YAML syntax." },
      { title: "OOM Kill", code: "# Kernel kills process to save system", description: "Consequence." },
      { title: "Java Heap", code: "-XX:MaxRAMPercentage=75.0", description: "JVM flag to respect container limits." },
      { title: "Monitoring", code: "docker stats", description: "Watch usage vs limit." },
      { title: "Bursting", code: "# CPU limits are hard caps, shares are soft", description: "Detail." }
    ]
  },
  87: {
    longDescription: "Docker Swarm is a container orchestration tool natively embedded in the Docker Engine. It turns a pool of Docker hosts into a single, virtual Docker host. It handles scheduling, overlay networking, service discovery, and load balancing.",
    command: "docker swarm",
    examples: [
      { title: "Check Status", code: "docker info | grep Swarm", description: "Inactive or Active." },
      { title: "Init", code: "docker swarm init", description: "Start Swarm mode." },
      { title: "Simplicity", code: "# Much easier to setup than Kubernetes", description: "Pro." },
      { title: "Production", code: "# Used for small-to-medium clusters", description: "Use case." },
      { title: "Integration", code: "# Uses standard Docker CLI and Compose files", description: "Benefit." },
      { title: "Security", code: "# mTLS between nodes is auto-configured", description: "Feature." },
      { title: "Raft Consensus", code: "# Managers maintain consistent state", description: "Architecture." },
      { title: "Leave", code: "docker swarm leave --force", description: "Stop Swarm mode." },
      { title: "Visualizer", code: "docker run ... dockersamples/visualizer", description: "GUI tool." },
      { title: "Secrets", code: "docker secret ls", description: "Built-in secret store." }
    ]
  },
  88: {
    longDescription: "Initialize a swarm. The Docker engine targeted by this command becomes a manager node in the newly created single-node swarm. It outputs a token to allow other nodes to join.",
    command: "docker swarm init",
    examples: [
      { title: "Init Swarm", code: "docker swarm init --advertise-addr 192.168.1.10", description: "Specify IP to listen on." },
      { title: "Join Token Worker", code: "docker swarm join-token worker", description: "Get command for workers." },
      { title: "Join Token Manager", code: "docker swarm join-token manager", description: "Get command for new managers." },
      { title: "Join", code: "docker swarm join --token <token> <ip>:2377", description: "Run on other node." },
      { title: "Rotate Token", code: "docker swarm join-token --rotate worker", description: "Invalidate old tokens." },
      { title: "Lock", code: "docker swarm update --autolock=true", description: "Require key to restart manager." },
      { title: "Unlock", code: "docker swarm unlock", description: "Enter key." },
      { title: "Force New Cluster", code: "docker swarm init --force-new-cluster", description: "Disaster recovery." },
      { title: "Port 2377", code: "# Cluster management port", description: "Firewall rule." },
      { title: "Port 7946", code: "# Node communication", description: "Firewall rule." }
    ]
  },
  89: {
    longDescription: "Swarm nodes are individual Docker instances participating in the swarm. Manager nodes handle orchestration and cluster management. Worker nodes execute containers (tasks). You should have an odd number of managers (3 or 5) for high availability.",
    command: "docker node ls",
    examples: [
      { title: "List Nodes", code: "docker node ls", description: "View status and role." },
      { title: "Promote", code: "docker node promote <node-id>", description: "Worker -> Manager." },
      { title: "Demote", code: "docker node demote <node-id>", description: "Manager -> Worker." },
      { title: "Inspect", code: "docker node inspect <node-id>", description: "Details." },
      { title: "Drain", code: "docker node update --availability drain <node-id>", description: "Evict tasks (maintenance)." },
      { title: "Active", code: "docker node update --availability active <node-id>", description: "Resume scheduling." },
      { title: "Remove", code: "docker node rm <node-id>", description: "Remove dead node." },
      { title: "Label", code: "docker node update --label-add zone=us-east <node-id>", description: "Add metadata." },
      { title: "Self Inspect", code: "docker node inspect self", description: "Check current node." },
      { title: "Leader", code: "# One manager is elected Leader", description: "Architecture." }
    ]
  },
  90: {
    longDescription: "A Swarm service is the definition of a task to execute on the manager or worker nodes. It is the central structure of the swarm system. When you create a service, you specify which container image to use and which commands to execute inside running containers.",
    command: "docker service create",
    examples: [
      { title: "Create Service", code: "docker service create --replicas 3 --name my-web nginx", description: "Run 3 copies." },
      { title: "Scale Service", code: "docker service scale my-web=5", description: "Increase to 5." },
      { title: "List Services", code: "docker service ls", description: "Show all." },
      { title: "List Tasks", code: "docker service ps my-web", description: "Show individual containers." },
      { title: "Update Image", code: "docker service update --image nginx:latest my-web", description: "Rolling update." },
      { title: "Publish Port", code: "docker service create -p 80:80 nginx", description: "Load balanced port." },
      { title: "Env Var", code: "docker service update --env-add NODE_ENV=prod my-web", description: "Config change." },
      { title: "Rollback", code: "docker service rollback my-web", description: "Undo last change." },
      { title: "Constraint", code: "docker service create --constraint node.role==worker ...", description: "Placement rule." },
      { title: "Logs", code: "docker service logs -f my-web", description: "Aggregated logs." }
    ]
  },
  91: {
    longDescription: "A stack is a collection of services that make up an application in a specific environment. You can deploy a stack from a docker-compose.yml file to a Swarm. This is the production equivalent of 'docker compose up'.",
    command: "docker stack deploy",
    examples: [
      { title: "Deploy Stack", code: "docker stack deploy -c docker-compose.yml my-stack", description: "Launch app." },
      { title: "List Services", code: "docker stack services my-stack", description: "Show components." },
      { title: "List Stacks", code: "docker stack ls", description: "Show all apps." },
      { title: "Remove Stack", code: "docker stack rm my-stack", description: "Teardown." },
      { title: "Update Stack", code: "docker stack deploy -c docker-compose.yml my-stack", description: "Re-run to update." },
      { title: "Compose Version", code: "# Requires version: '3.0' or higher", description: "Requirement." },
      { title: "Process", code: "docker stack ps my-stack", description: "Show all tasks." },
      { title: "Secrets", code: "# Secrets defined in YAML are created automatically", description: "Feature." },
      { title: "Networks", code: "# Overlay networks created automatically", description: "Feature." },
      { title: "Bundle", code: "docker stack deploy --bundle-file bundle.dab my-stack", description: "Distributed Bundle (Legacy)." }
    ]
  },
  92: {
    longDescription: "Swarm updates services incrementally. You can configure the delay between updates and the number of tasks updated simultaneously to ensure zero downtime. If an update fails, Swarm can automatically rollback.",
    command: "--update-delay, --update-parallelism",
    examples: [
      { title: "Update Config", code: "docker service update --update-delay 10s --update-parallelism 2 my-web", description: "Update 2 at a time, wait 10s." },
      { title: "Failure Action", code: "--update-failure-action rollback", description: "Auto-revert on error." },
      { title: "Order", code: "--update-order start-first", description: "Start new before killing old (safer)." },
      { title: "Monitor", code: "--update-monitor 30s", description: "Wait 30s to verify health." },
      { title: "Max Failure", code: "--update-max-failure-ratio 0.1", description: "Abort if 10% fail." },
      { title: "Force Update", code: "docker service update --force my-web", description: "Restart all tasks." },
      { title: "Inspect", code: "docker service inspect --pretty my-web", description: "View policy." },
      { title: "Rollback Config", code: "--rollback-parallelism 0", description: "Fastest rollback." },
      { title: "YAML", code: "deploy:\n  update_config:\n    parallelism: 2", description: "Compose syntax." },
      { title: "Blue/Green", code: "# Swarm does Rolling. Blue/Green requires external LB.", description: "Concept." }
    ]
  },
  93: {
    longDescription: "Swarm services can access secrets securely. Secrets are never stored on disk on worker nodes and are only available in memory to the specific containers that need them. This is more secure than environment variables.",
    command: "docker secret",
    examples: [
      { title: "List Secrets", code: "docker secret ls", description: "Show managed secrets." },
      { title: "Create", code: "docker secret create my_pass file.txt", description: "Upload." },
      { title: "Inspect", code: "docker secret inspect my_pass", description: "Metadata." },
      { title: "Grant Access", code: "docker service update --secret-add my_pass my-web", description: "Give service access." },
      { title: "Revoke Access", code: "docker service update --secret-rm my_pass my-web", description: "Remove access." },
      { title: "Mount Target", code: "--secret source=my_pass,target=redis_pass", description: "Custom filename." },
      { title: "Rotate", code: "# Create my_pass_v2, update service, rm my_pass_v1", description: "Rotation." },
      { title: "Configs", code: "docker config create ...", description: "Similar to secrets but for non-sensitive data." },
      { title: "External", code: "secrets:\n  db_pass:\n    external: true", description: "Compose syntax." },
      { title: "Limit", code: "500kb max size", description: "Constraint." }
    ]
  },
  94: {
    longDescription: "Display a live stream of container(s) resource usage statistics. This command gives you a quick view of CPU, memory, network I/O, and block I/O usage.",
    command: "docker stats",
    examples: [
      { title: "All Containers", code: "docker stats", description: "Monitor everything." },
      { title: "Specific", code: "docker stats container1 container2", description: "Monitor list." },
      { title: "Formatting", code: "docker stats --format \"table {{.Name}}\\t{{.CPUPerc}}\\t{{.MemUsage}}\"", description: "Clean table." },
      { title: "No Stream", code: "docker stats --no-stream", description: "Snapshot." },
      { title: "JSON", code: "docker stats --format \"{{json .}}\"", description: "Machine readable." },
      { title: "Sort", code: "# Does not support sorting natively. Use API.", description: "Limit." },
      { title: "All", code: "docker stats -a", description: "Include stopped." },
      { title: "Overhead", code: "# Lightweight, runs on client", description: "Perf." },
      { title: "Prometheus", code: "# Use Prometheus for historical data", description: "Upgrade path." },
      { title: "API", code: "GET /containers/{id}/stats", description: "HTTP Endpoint." }
    ]
  },
  95: {
    longDescription: "Stream real-time events from the server. These events can be filtered by type (container, image, volume, network, etc.) and object ID. Useful for debugging automation or triggers.",
    command: "docker events",
    examples: [
      { title: "Stream Events", code: "docker events", description: "Watch everything." },
      { title: "Filter Type", code: "docker events --filter 'type=container'", description: "Only container events." },
      { title: "Filter Action", code: "docker events --filter 'event=stop'", description: "Only stops." },
      { title: "Filter Image", code: "docker events --filter 'image=alpine'", description: "Events for image." },
      { title: "Since", code: "docker events --since '1h'", description: "Past events." },
      { title: "JSON", code: "docker events --format '{{json .}}'", description: "Structure." },
      { title: "Volume", code: "docker events --filter 'type=volume'", description: "Storage events." },
      { title: "Network", code: "docker events --filter 'type=network'", description: "Net events." },
      { title: "Debug", code: "# Why did my container die?", description: "Use case." },
      { title: "Automation", code: "# Trigger script on container start", description: "Use case." }
    ]
  },
  96: {
    longDescription: "Docker includes multiple logging mechanisms to help you get information from running containers and services. The default logging driver is 'json-file', which writes logs to local files on the host. However, for production, you often want to ship logs to a centralized system like Splunk, Fluentd, AWS CloudWatch, or Syslog.",
    command: "docker run --log-driver=<driver>",
    examples: [
      { title: "Syslog Driver", code: "docker run --log-driver=syslog ubuntu echo hello", description: "Send to syslog daemon." },
      { title: "Limit Log Size", code: "docker run --log-opt max-size=10m --log-opt max-file=3 nginx", description: "Rotate logs." },
      { title: "AWS CloudWatch", code: "--log-driver=awslogs --log-opt awslogs-group=my-group", description: "Ship to AWS." },
      { title: "Fluentd", code: "--log-driver=fluentd", description: "Ship to Fluentd." },
      { title: "None", code: "--log-driver=none", description: "Disable logging (perf)." },
      { title: "Default Config", code: "/etc/docker/daemon.json", description: "Set global default." },
      { title: "Inspect", code: "docker inspect -f '{{.HostConfig.LogConfig.Type}}' my-c", description: "Check driver." },
      { title: "Compose", code: "logging:\n  driver: \"json-file\"\n  options:\n    max-size: \"200k\"", description: "YAML." },
      { title: "Gelf", code: "--log-driver=gelf", description: "Graylog." },
      { title: "Dual Logging", code: "# Docker 20.10+ can read logs (docker logs) even with remote drivers", description: "Feature." }
    ]
  },
  97: {
    longDescription: "cAdvisor (Container Advisor) provides users with an understanding of the resource usage and performance characteristics of their running containers. Prometheus is a monitoring system that scrapes metrics from cAdvisor. Grafana visualizes them.",
    command: "docker run ... google/cadvisor",
    examples: [
      { title: "Run cAdvisor", code: "docker run -d --volume=/:/rootfs:ro --volume=/var/run:/var/run:ro --publish=8080:8080 google/cadvisor:latest", description: "Start monitoring agent." },
      { title: "Prometheus Config", code: "scrape_configs:\n  - job_name: 'cadvisor'\n    static_configs:\n      - targets: ['cadvisor:8080']", description: "Scrape cAdvisor." },
      { title: "Metrics URL", code: "curl localhost:8080/metrics", description: "Raw data." },
      { title: "Grafana Dashboard", code: "# Import ID 14282", description: "Visualization." },
      { title: "Node Exporter", code: "# Monitor host metrics", description: "Complementary." },
      { title: "Resource Usage", code: "# cAdvisor uses resources too!", description: "Warning." },
      { title: "Privileged", code: "--privileged", description: "May be needed for some metrics." },
      { title: "Docker Sock", code: "-v /var/run/docker.sock:/var/run/docker.sock", description: "Access metadata." },
      { title: "Stack", code: "Prometheus + Grafana + cAdvisor", description: "Standard stack." },
      { title: "Alerts", code: "AlertManager", description: "Trigger on high CPU." }
    ]
  },
  98: {
    longDescription: "Portainer is a lightweight management UI which allows you to easily manage your different Docker environments (Docker hosts or Swarm clusters). It provides a visual way to manage containers, images, networks, and volumes.",
    command: "docker run ... portainer/portainer",
    examples: [
      { title: "Run Portainer", code: "docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce", description: "Start UI." },
      { title: "Access UI", code: "http://localhost:9000", description: "Open browser." },
      { title: "Agent", code: "docker run ... portainer/agent", description: "For remote Swarm nodes." },
      { title: "Stacks", code: "# Deploy Compose files via Web UI", description: "Feature." },
      { title: "Users", code: "# Manage teams and access", description: "Feature." },
      { title: "Console", code: "# Web-based exec console", description: "Feature." },
      { title: "Logs", code: "# Web-based log viewer", description: "Feature." },
      { title: "Volume Browse", code: "# Browse/Edit files in volumes", description: "Feature." },
      { title: "Update", code: "# Stop, Pull, Start", description: "Maintenance." },
      { title: "Security", code: "# Exposes root access via UI. Protect it!", description: "Warning." }
    ]
  },
  99: {
    longDescription: "Integrating Docker into CI/CD pipelines (like Jenkins, GitLab CI, GitHub Actions) allows for automated building, testing, and deployment of container images. The standard flow is: Checkout -> Build -> Test -> Push -> Deploy.",
    command: "CI/CD Pipeline",
    examples: [
      { title: "Build & Push", code: "docker build -t myapp:$BUILD_ID .\ndocker push myapp:$BUILD_ID", description: "Basic script." },
      { title: "Test", code: "docker run --rm myapp npm test", description: "Run tests in container." },
      { title: "DinD", code: "image: docker:dind", description: "Docker-in-Docker (GitLab)." },
      { title: "Socket Binding", code: "-v /var/run/docker.sock:/var/run/docker.sock", description: "Use host engine." },
      { title: "Compose Test", code: "docker compose -f docker-compose.test.yml up --exit-code-from sut", description: "Integration tests." },
      { title: "Linting", code: "hadolint Dockerfile", description: "Static analysis." },
      { title: "Scanning", code: "trivy image myapp", description: "Security scan." },
      { title: "Tagging", code: "docker tag myapp:$SHA myapp:latest", description: "Release tag." },
      { title: "Cleanup", code: "docker system prune -f", description: "Free CI runner space." },
      { title: "Buildx", code: "# Use buildx for multi-arch CI", description: "Advanced." }
    ]
  },
  100: {
    longDescription: "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. It has first-class support for Docker.",
    command: ".github/workflows/docker.yml",
    examples: [
      { title: "Login Action", code: "- uses: docker/login-action@v2\n  with:\n    username: ${{ secrets.USER }}\n    password: ${{ secrets.TOKEN }}", description: "Auth." },
      { title: "Build & Push", code: "- uses: docker/build-push-action@v4\n  with:\n    push: true\n    tags: user/app:latest", description: "Build." },
      { title: "Setup Buildx", code: "- uses: docker/setup-buildx-action@v2", description: "Enable BuildKit." },
      { title: "Metadata", code: "- uses: docker/metadata-action@v4", description: "Auto-generate tags." },
      { title: "QEMU", code: "- uses: docker/setup-qemu-action@v2", description: "For multi-arch." },
      { title: "Secrets", code: "${{ secrets.DOCKERHUB_TOKEN }}", description: "Never commit passwords." },
      { title: "Cache", code: "cache-from: type=gha\ncache-to: type=gha,mode=max", description: "GitHub Cache API." },
      { title: "Registry", code: "ghcr.io", description: "GitHub Container Registry." },
      { title: "Context", code: "context: .", description: "Build context." },
      { title: "Trigger", code: "on:\n  push:\n    branches: [ \"main\" ]", description: "Workflow trigger." }
    ]
  },
  101: {
    longDescription: "Leveraging Docker layer caching in CI is crucial for fast build times. It involves pulling the previous image version before building to reuse cached layers. Without this, every CI build starts from scratch (slow!).",
    command: "--cache-from",
    examples: [
      { title: "Classic Pattern", code: "docker pull myapp:latest || true\ndocker build --cache-from myapp:latest -t myapp:$SHA .", description: "Pull then build." },
      { title: "BuildKit Inline", code: "docker build --build-arg BUILDKIT_INLINE_CACHE=1 ...", description: "Embed cache in image." },
      { title: "Buildx Cache", code: "--cache-to type=registry,ref=user/app:cache", description: "External cache image." },
      { title: "Multi-Stage", code: "COPY --from=nginx:alpine ...", description: "Uses image cache." },
      { title: "Local Cache", code: "--cache-to type=local,dest=path", description: "Save to disk." },
      { title: "GHA Cache", code: "type=gha", description: "GitHub Actions cache." },
      { title: "S3 Cache", code: "type=s3", description: "AWS S3 cache." },
      { title: "Partial Cache", code: "# Only unchanged layers are reused", description: "Fact." },
      { title: "Base Image", code: "# Cached base images save download time", description: "Fact." },
      { title: "Pruning", code: "# Cache can grow large, prune occasionally", description: "Maintenance." }
    ]
  },
  102: {
    longDescription: "Docker Buildx is a CLI plugin that extends the docker build command with the full support of the BuildKit builder toolkit. It provides the same user experience as docker build with many new features like multi-arch builds. You can build images for arm64 (Apple Silicon, Raspberry Pi) and amd64 (Intel/AMD) simultaneously.",
    command: "docker buildx build",
    examples: [
      { title: "Create Builder", code: "docker buildx create --use", description: "Init buildx." },
      { title: "Multi-Arch", code: "docker buildx build --platform linux/amd64,linux/arm64 -t app:latest --push .", description: "Build & Push." },
      { title: "Inspect", code: "docker buildx inspect", description: "Check driver." },
      { title: "Ls", code: "docker buildx ls", description: "List builders." },
      { title: "Bake", code: "docker buildx bake", description: "Build multiple targets (like Make)." },
      { title: "Stop", code: "docker buildx stop", description: "Stop builder container." },
      { title: "Prune", code: "docker buildx prune", description: "Clean cache." },
      { title: "Install", code: "docker run --privileged --rm tonistiigi/binfmt --install all", description: "Enable QEMU." },
      { title: "Output", code: "--output type=docker", description: "Load to local daemon." },
      { title: "Secrets", code: "--secret id=mysecret", description: "Safe build secrets." }
    ]
  },
  103: {
    longDescription: "Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications. It groups containers that make up an application into logical units (Pods) for easy management and discovery. It is the de-facto standard for container orchestration.",
    command: "kubectl version",
    examples: [
      { title: "Pod", code: "apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n  - name: nginx\n    image: nginx", description: "Basic unit." },
      { title: "Apply", code: "kubectl apply -f pod.yaml", description: "Create/Update resource." },
      { title: "Get Pods", code: "kubectl get pods", description: "List pods." },
      { title: "Logs", code: "kubectl logs nginx", description: "View logs." },
      { title: "Exec", code: "kubectl exec -it nginx -- bash", description: "Enter pod." },
      { title: "Service", code: "kind: Service\ntype: LoadBalancer", description: "Expose pod." },
      { title: "Deployment", code: "kind: Deployment\nreplicas: 3", description: "Manage scale." },
      { title: "Describe", code: "kubectl describe pod nginx", description: "Debug." },
      { title: "Context", code: "kubectl config use-context my-cluster", description: "Switch cluster." },
      { title: "Delete", code: "kubectl delete pod nginx", description: "Remove." }
    ]
  },
  104: {
    longDescription: "Helm is the best way to find, share, and use software built for Kubernetes. Helm helps you manage Kubernetes applications — Helm Charts help you define, install, and upgrade even the most complex Kubernetes application. It is 'apt/yum' for K8s.",
    command: "helm install",
    examples: [
      { title: "Install Chart", code: "helm install my-release bitnami/nginx", description: "Deploy app." },
      { title: "List Releases", code: "helm list", description: "Show installed apps." },
      { title: "Repo Add", code: "helm repo add bitnami https://charts.bitnami.com/bitnami", description: "Add source." },
      { title: "Search", code: "helm search repo nginx", description: "Find charts." },
      { title: "Uninstall", code: "helm uninstall my-release", description: "Remove app." },
      { title: "Upgrade", code: "helm upgrade my-release bitnami/nginx", description: "Update version." },
      { title: "Values", code: "helm install -f values.yaml ...", description: "Custom config." },
      { title: "Create", code: "helm create my-chart", description: "Scaffold new chart." },
      { title: "Lint", code: "helm lint ./my-chart", description: "Check syntax." },
      { title: "Template", code: "helm template ./my-chart", description: "Render YAML dry-run." }
    ]
  },
  105: {
    longDescription: "Terraform is an infrastructure as code (IaC) tool that allows you to build, change, and version infrastructure safely and efficiently. The Docker provider exposes Docker resources such as containers, images, and networks to Terraform, allowing you to manage Docker alongside your cloud resources.",
    command: "terraform init",
    examples: [
      { title: "Provider", code: "provider \"docker\" {}", description: "Init provider." },
      { title: "Image", code: "resource \"docker_image\" \"nginx\" {\n  name = \"nginx:latest\"\n}", description: "Pull image." },
      { title: "Container", code: "resource \"docker_container\" \"nginx\" {\n  image = docker_image.nginx.latest\n  name  = \"tutorial\"\n}", description: "Run container." },
      { title: "Apply", code: "terraform apply", description: "Execute plan." },
      { title: "Plan", code: "terraform plan", description: "Preview changes." },
      { title: "Destroy", code: "terraform destroy", description: "Teardown." },
      { title: "Outputs", code: "output \"ip\" {\n  value = docker_container.nginx.ip_address\n}", description: "Get data." },
      { title: "Variables", code: "variable \"port\" {\n  default = 8080\n}", description: "Parametrization." },
      { title: "State", code: "# State stored in terraform.tfstate", description: "Concept." },
      { title: "Modules", code: "module \"web\" { source = \"./web\" }", description: "Reusability." }
    ]
  },
  106: {
    longDescription: "Docker replaces clunky, system-wide AMP stacks (XAMPP/MAMP) with clean, isolated environments. The primary benefit of the official PHP images is version isolation. You can run a legacy PHP 7.4 project and a bleeding-edge PHP 8.3 project simultaneously on the same machine without dependency conflicts or switching global paths.",
    command: "FROM php:8.2-fpm",
    examples: [
      { title: "Version Isolation", code: "FROM php:8.2-cli", description: "Run exactly the version your project needs." },
      { title: "No System Pollution", code: "# You don't need PHP installed on your Mac/PC", description: "Benefit." },
      { title: "Consistency", code: "# The PHP environment is identical for all developers", description: "Benefit." },
      { title: "Portability", code: "# Move from dev to prod without configuration drift", description: "Benefit." },
      { title: "Variant Choice", code: "FROM php:8.2-fpm", description: "Choose CLI, Apache, or FPM seamlessly." },
      { title: "Instant Teardown", code: "docker compose down -v", description: "Clean up your entire PHP environment in seconds." },
      { title: "No Virtual Hosts", code: "# Map ports directly instead of editing host files", description: "Benefit." },
      { title: "Security", code: "# App is isolated from your host OS", description: "Benefit." },
      { title: "Quick Upgrades", code: "FROM php:8.3-fpm", description: "Test a new PHP version by changing one line." },
      { title: "Microservices", code: "# Run multiple PHP apps independently", description: "Benefit." }
    ]
  },
  107: {
    longDescription: "Configuring PHP with XAMPP means hunting down the correct php.ini file hidden deep in your system. Docker benefits PHP configuration by making it explicit, trackable in version control, and reproducible. Every developer gets the exact same memory limits and execution times automatically.",
    command: "COPY php.ini $PHP_INI_DIR/conf.d/",
    examples: [
      { title: "Version Controlled Config", code: "COPY custom.ini $PHP_INI_DIR/conf.d/", description: "Commit settings to Git." },
      { title: "Environment Parity", code: "# Dev, Staging, and Prod share the exact same limits", description: "Benefit." },
      { title: "Easy Overrides", code: "RUN echo \"memory_limit=512M\" > ...", description: "Change settings on the fly." },
      { title: "No Global Changes", code: "# Changing a setting doesn't break other projects", description: "Benefit." },
      { title: "Explicit Defaults", code: "mv $PHP_INI_DIR/php.ini-production ...", description: "Use known safe configurations." },
      { title: "Modular Configs", code: "# Keep separate .ini files for specific tweaks", description: "Benefit." },
      { title: "Easy Debugging", code: "php -i | grep memory_limit", description: "Instantly check active settings." },
      { title: "No Restart Required", code: "# Rebuild the image, and the config is locked in", description: "Benefit." },
      { title: "Security", code: "display_errors = Off", description: "Enforce secure defaults easily." },
      { title: "Dynamic Injection", code: "# Use ENV vars to change config per environment", description: "Benefit." }
    ]
  },
  108: {
    longDescription: "Installing PHP extensions (like Redis, GD, or PDO) natively can be a nightmare of missing C headers and compilation errors. Docker solves this brilliantly with helper scripts. You get exactly the extensions you need, compiled perfectly every time, without cluttering your host OS.",
    command: "docker-php-ext-install",
    examples: [
      { title: "Painless Installation", code: "RUN docker-php-ext-install pdo_mysql", description: "No hunting for DLLs or .so files." },
      { title: "Reproducible Builds", code: "# Extensions compile identically on every machine", description: "Benefit." },
      { title: "No Leftover Junk", code: "RUN docker-php-source delete", description: "Keep the environment clean after compiling." },
      { title: "Easy PECL", code: "RUN pecl install redis", description: "Standardized installation for complex modules." },
      { title: "Explicit Requirements", code: "# Your Dockerfile documents exactly what the app needs", description: "Benefit." },
      { title: "Automated Scripts", code: "# Use mlocati/docker-php-extension-installer for one-liners", description: "Benefit." },
      { title: "No Version Clashes", code: "# Need older GD for one app, newer for another? Easy.", description: "Benefit." },
      { title: "Instant Verification", code: "php -m", description: "Confirm the module is active immediately." },
      { title: "Custom Compilation", code: "RUN docker-php-ext-configure gd --with-jpeg", description: "Easily pass complex build flags." },
      { title: "Portability", code: "# The compiled extension ships inside the image", description: "Benefit." }
    ]
  },
  109: {
    longDescription: "Managing dependencies with Composer is vastly improved with Docker. You no longer need Composer installed globally on your machine. Furthermore, multi-stage builds allow you to download dependencies in an isolated container and only copy the final 'vendor' folder to your production image, keeping it incredibly lean and secure.",
    command: "COPY --from=composer",
    examples: [
      { title: "No Global Composer", code: "COPY --from=composer:latest /usr/bin/composer /usr/bin/composer", description: "Use Composer without installing it on your Mac/PC." },
      { title: "Isolated Resolution", code: "# Dependencies are resolved against the container's exact PHP version", description: "Benefit." },
      { title: "Lean Production", code: "# Build stage handles downloads; Final stage is small", description: "Benefit." },
      { title: "Perfect Parity", code: "RUN composer install --no-dev", description: "Guarantee the exact same vendor folder everywhere." },
      { title: "No Cache Bloat", code: "# Composer cache doesn't fill up your host hard drive", description: "Benefit." },
      { title: "CI/CD Ready", code: "# The exact same command runs locally and in GitHub Actions", description: "Benefit." },
      { title: "Version Pinning", code: "COPY --from=composer:2", description: "Lock Composer version to prevent surprise breaks." },
      { title: "Parallel Downloads", code: "# Runs natively fast inside the Linux container", description: "Benefit." },
      { title: "Security", code: "# Composer runs in an isolated sandbox", description: "Benefit." },
      { title: "Clean Workflow", code: "# Delete the container, delete the dependencies", description: "Benefit." }
    ]
  },
  110: {
    longDescription: "Xdebug setup is notoriously difficult in traditional environments. Docker forces a clean separation: the debugger runs in the container and connects back to your IDE on the host. This strict architecture actually makes troubleshooting easier and prevents Xdebug from accidentally running in production.",
    command: "pecl install xdebug",
    examples: [
      { title: "Strict Separation", code: "# Debugger is contained; host remains clean", description: "Benefit." },
      { title: "Guaranteed Off in Prod", code: "# Simply don't install Xdebug in the production stage", description: "Benefit." },
      { title: "Network Clarity", code: "xdebug.client_host=host.docker.internal", description: "Clear path back to your IDE." },
      { title: "Reproducible Config", code: "xdebug.mode=debug", description: "Commit your debug config to Git." },
      { title: "On-Demand Activation", code: "# Only run the debug container when needed", description: "Benefit." },
      { title: "No Port Conflicts", code: "# Port 9003 is mapped cleanly", description: "Benefit." },
      { title: "Team Standardization", code: "# Every developer uses the exact same debug setup", description: "Benefit." },
      { title: "Easy Logging", code: "xdebug.log=/tmp/xdebug.log", description: "Isolate debug logs easily." },
      { title: "Multi-App Debugging", code: "# Debug multiple microservices simultaneously", description: "Benefit." },
      { title: "Performance Control", code: "# Disable the extension to immediately regain speed", description: "Benefit." }
    ]
  },
  111: {
    longDescription: "Connecting PHP to a database is where Docker truly shines over XAMPP. Instead of sharing one massive, messy MySQL server for all your projects, Docker gives every application its own dedicated, isolated database container. This completely eliminates port conflicts and data corruption between projects.",
    command: "DB_HOST=mysql",
    examples: [
      { title: "Dedicated Databases", code: "# Every project gets its own fresh MySQL instance", description: "Benefit." },
      { title: "No Port Clashes", code: "# Run 5 projects requiring MySQL simultaneously", description: "Benefit." },
      { title: "Instant Teardown", code: "docker compose down -v", description: "Nuke the database and start fresh instantly." },
      { title: "Version Matching", code: "# Use MySQL 5.7 for an old app, MySQL 8 for a new one", description: "Benefit." },
      { title: "Network Isolation", code: "# Only the PHP container can talk to the DB container", description: "Security Benefit." },
      { title: "Easy Switching", code: "# Swap MySQL for PostgreSQL by changing one line in Compose", description: "Benefit." },
      { title: "Predictable Hostnames", code: "DB_HOST=db", description: "Use simple service names instead of messy IP addresses." },
      { title: "Automated Setup", code: "# Databases initialize automatically on first run", description: "Benefit." },
      { title: "Data Portability", code: "volumes:\n  - db_data:/var/lib/mysql", description: "Persist data safely across restarts." },
      { title: "No Host Pollution", code: "# MySQL isn't running constantly in your host background", description: "Benefit." }
    ]
  },
  112: {
    longDescription: "Docker allows you to define completely different environments for Development and Production using the exact same base code. Dev images get hot-reloading and debuggers; Prod images are stripped down, immutable, and optimized for speed. XAMPP cannot offer this level of control.",
    command: "FROM base AS prod",
    examples: [
      { title: "Immutable Deployments", code: "# The exact image tested in Staging goes to Production", description: "Benefit." },
      { title: "Zero Setup Production", code: "# Servers don't need PHP installed, just Docker", description: "Benefit." },
      { title: "Tiny Artifacts", code: "FROM php:8.2-fpm-alpine", description: "Ship 50MB images instead of full OS setups." },
      { title: "Targeted Builds", code: "docker build --target production", description: "Build exactly what you need." },
      { title: "Security", code: "# Production images have no development tools to exploit", description: "Benefit." },
      { title: "Hot Reloading", code: "# Dev mounts code dynamically; Prod bakes it in permanently", description: "Benefit." },
      { title: "Optimized Caching", code: "RUN docker-php-ext-install opcache", description: "Bake in performance." },
      { title: "Consistent Behavior", code: "# If it works locally in the Prod container, it works live", description: "Benefit." },
      { title: "Clean Rollbacks", code: "# Bad deploy? Revert to the previous image tag instantly", description: "Benefit." },
      { title: "Simplified CI/CD", code: "# Pipelines just build and push the final artifact", description: "Benefit." }
    ]
  },
  113: {
    longDescription: "Apache + mod_php (the XAMPP default) is notoriously slow and resource-heavy. Docker makes it trivial to deploy the industry standard high-performance architecture: Nginx acting as a reverse proxy for PHP-FPM. Doing this natively is complex; with Docker Compose, it's just a few lines of YAML.",
    command: "fastcgi_pass php:9000;",
    examples: [
      { title: "High Performance", code: "# Nginx + FPM can handle vastly more traffic than Apache", description: "Benefit." },
      { title: "Separation of Concerns", code: "# Web server and PHP processor are isolated", description: "Benefit." },
      { title: "Trivial Setup", code: "services:\n  php:\n  nginx:", description: "Wire them together in seconds." },
      { title: "Scalability", code: "# Scale the PHP container independently of Nginx", description: "Benefit." },
      { title: "Resource Efficiency", code: "# FPM uses far less RAM than Apache worker threads", description: "Benefit." },
      { title: "Security Boundary", code: "# Only Nginx touches the public internet", description: "Benefit." },
      { title: "Easy Configuration", code: "# Standardize Nginx configs across all your projects", description: "Benefit." },
      { title: "Independent Logging", code: "# Separate logs for web traffic and PHP errors", description: "Benefit." },
      { title: "Modern Architecture", code: "# Replicates real-world cloud deployments perfectly", description: "Benefit." },
      { title: "No Conflicting Ports", code: "# Only expose port 80/443 on the Nginx container", description: "Benefit." }
    ]
  },
  114: {
    longDescription: "Laravel Sail provides an incredible developer experience by hiding Docker's complexity behind simple Artisan commands. The massive benefit here is 'Zero Configuration Onboarding'. A new team member clones your repo, runs 'sail up', and has a fully functioning Laravel stack (PHP, MySQL, Redis) in minutes, regardless of their OS.",
    command: "./vendor/bin/sail up",
    examples: [
      { title: "Zero Install", code: "# New devs don't need PHP, Composer, or MySQL installed", description: "Benefit." },
      { title: "Instant Productivity", code: "./vendor/bin/sail up -d", description: "Go from clone to coding in 2 minutes." },
      { title: "Unified Tooling", code: "./vendor/bin/sail artisan migrate", description: "Run commands safely inside the container." },
      { title: "Built-in Services", code: "# Redis, Meilisearch, and Mailpit work out of the box", description: "Benefit." },
      { title: "Cross-Platform", code: "# Works identically on Mac, Windows (WSL2), and Linux", description: "Benefit." },
      { title: "No MAMP/XAMPP", code: "# Completely replaces legacy local development stacks", description: "Benefit." },
      { title: "Easy Customization", code: "php artisan sail:publish", description: "Modify the Dockerfiles if you outgrow the defaults." },
      { title: "Safe Testing", code: "./vendor/bin/sail test", description: "Run PHPUnit in a perfect, isolated environment." },
      { title: "Automated Networking", code: "# Sail handles all internal container DNS resolution", description: "Benefit." },
      { title: "Clean Teardown", code: "./vendor/bin/sail down", description: "Remove the entire environment without a trace." }
    ]
  },
  115: {
    longDescription: "Building a manual Dockerfile for Laravel gives you absolute control over your environment. The main benefit is creating a highly optimized, production-ready artifact. You dictate exactly which PHP extensions are compiled and ensure the image contains only what your specific application needs to run.",
    command: "FROM php:8.2-fpm",
    examples: [
      { title: "Absolute Control", code: "# You decide exactly what goes into the server", description: "Benefit." },
      { title: "Production Ready", code: "# Manual files are optimized for live deployment, unlike Sail", description: "Benefit." },
      { title: "Lean Artifacts", code: "# Strip out development tools for smaller image sizes", description: "Benefit." },
      { title: "Custom Extensions", code: "RUN docker-php-ext-install bcmath", description: "Compile only what Laravel requires." },
      { title: "Security Hardening", code: "# Enforce read-only filesystems and non-root users", description: "Benefit." },
      { title: "Predictable Builds", code: "# The resulting image behaves exactly the same everywhere", description: "Benefit." },
      { title: "CI/CD Integration", code: "# The Dockerfile is the blueprint for your automated pipelines", description: "Benefit." },
      { title: "Multi-stage Power", code: "# Compile frontend assets and backend deps in one file", description: "Benefit." },
      { title: "No Extraneous Junk", code: "# No unnecessary services running in the background", description: "Benefit." },
      { title: "Architecture Alignment", code: "# Match your container OS exactly to your production servers", description: "Benefit." }
    ]
  },
  116: {
    longDescription: "Docker Compose allows you to define Laravel's entire infrastructure—App, Database, Cache, and Queue—in a single text file. The benefit is 'Infrastructure as Code' for your local machine. You spin up complex, multi-tier architectures with one command, ensuring the architecture is documented and reproducible.",
    command: "docker compose up",
    examples: [
      { title: "Infrastructure as Code", code: "# The entire architecture is documented in YAML", description: "Benefit." },
      { title: "One-Click Setup", code: "docker compose up -d", description: "Start the whole ecosystem instantly." },
      { title: "Network Isolation", code: "# Services communicate securely via internal DNS", description: "Benefit." },
      { title: "Service Modularity", code: "# The database is completely decoupled from the application", description: "Benefit." },
      { title: "Easy Scaling", code: "# Add more worker containers with a single command", description: "Benefit." },
      { title: "Shared Configuration", code: "env_file: .env", description: "Inject Laravel's config into all containers easily." },
      { title: "Guaranteed Boot Order", code: "depends_on: [mysql, redis]", description: "Ensure the DB is ready before the app starts." },
      { title: "Persistent Data", code: "volumes:\n  db_data:", description: "Safely store DB data outside the container lifecycle." },
      { title: "Local Email Testing", code: "# Add Mailpit to catch outgoing emails instantly", description: "Benefit." },
      { title: "Total Reproducibility", code: "# If the compose file works for you, it works for your team", description: "Benefit." }
    ]
  },
  117: {
    longDescription: "Running Artisan commands via Docker ensures that scripts like migrations or queue processors execute in the exact same PHP environment as your web application. The benefit is preventing subtle bugs caused by running a different CLI PHP version on your host machine compared to the web server.",
    command: "docker compose exec app php artisan",
    examples: [
      { title: "Environment Parity", code: "# CLI and Web use the exact same PHP binary and extensions", description: "Benefit." },
      { title: "Safe Migrations", code: "docker compose exec app php artisan migrate", description: "Execute DB changes in the correct context." },
      { title: "No Host Dependencies", code: "# You don't need PHP installed locally to run Tinker", description: "Benefit." },
      { title: "Accurate Caching", code: "docker compose exec app php artisan config:cache", description: "Paths are cached relative to the container, not the host." },
      { title: "Isolated Queues", code: "docker compose exec app php artisan queue:work", description: "Test queue processing safely." },
      { title: "Easy Aliasing", code: "alias art=\"docker compose exec app php artisan\"", description: "Speed up your workflow." },
      { title: "Consistent Seeding", code: "docker compose exec app php artisan db:seed", description: "Populate the isolated database reliably." },
      { title: "Scheduled Tasks", code: "# Test the scheduler exactly how it runs in production", description: "Benefit." },
      { title: "Debugging", code: "docker compose exec app php artisan route:list", description: "Check routes without leaving the environment." },
      { title: "CI Automation", code: "# Run artisan commands safely within automated pipelines", description: "Benefit." }
    ]
  },
  118: {
    longDescription: "While file permissions can be tricky initially, Docker's explicit permission model ultimately benefits security. By defining exactly which user (e.g., www-data) owns the 'storage' and 'bootstrap/cache' directories in your Dockerfile, you prevent arbitrary code execution vulnerabilities and ensure production safety.",
    command: "chown -R www-data",
    examples: [
      { title: "Explicit Ownership", code: "RUN chown -R www-data:www-data /var/www/html/storage", description: "Security Benefit." },
      { title: "No 777 Required", code: "# You never need insecure chmod 777 in production again", description: "Benefit." },
      { title: "Consistent Execution", code: "# The web server user is guaranteed to be correct", description: "Benefit." },
      { title: "Host Isolation", code: "# Container users map to host users cleanly (with setup)", description: "Benefit." },
      { title: "Immutable Safety", code: "# Only specific folders are writable; the rest is locked down", description: "Benefit." },
      { title: "Automated Fixes", code: "# Build scripts ensure permissions are perfect on every deploy", description: "Benefit." },
      { title: "Sail Integration", code: "# Laravel Sail handles dev permissions automatically", description: "Benefit." },
      { title: "Log Security", code: "# Log files are owned correctly and cannot be tampered with", description: "Benefit." },
      { title: "Auditability", code: "# The Dockerfile serves as documentation for access control", description: "Benefit." },
      { title: "Framework Requirements", code: "# Perfectly satisfies Laravel's strict write requirements", description: "Benefit." }
    ]
  },
  119: {
    longDescription: "Docker fundamentally changes how Laravel Queues are handled for the better. The primary benefit is isolating background processing from web traffic. You can spin up a dedicated 'worker' container that shares the exact same codebase as the web app but only runs 'php artisan queue:work', preventing heavy jobs from slowing down HTTP requests.",
    command: "php artisan queue:work",
    examples: [
      { title: "Workload Isolation", code: "# Heavy jobs don't consume web server resources", description: "Benefit." },
      { title: "Trivial Scaling", code: "docker compose up --scale worker=5", description: "Instantly multiply your queue processing power." },
      { title: "Shared Codebase", code: "# Workers use the same Docker image as the web app", description: "Benefit." },
      { title: "Process Guarantee", code: "restart: always", description: "Workers automatically restart if they crash." },
      { title: "Dedicated Logging", code: "# Queue logs are separated from web access logs", description: "Benefit." },
      { title: "Resource Limits", code: "# Cap RAM/CPU specifically for the worker containers", description: "Benefit." },
      { title: "No Supervisor Required", code: "# Docker acts as the process manager, replacing Supervisord", description: "Benefit." },
      { title: "Clean Architecture", code: "worker:\n  command: php artisan queue:work", description: "Clear separation of concerns in Compose." },
      { title: "Easy Horizon Setup", code: "# Run Laravel Horizon in its own isolated container", description: "Benefit." },
      { title: "Zero Host Config", code: "# No need to configure systemd or cron on the host machine", description: "Benefit." }
    ]
  },
  120: {
    longDescription: "Docker streamlines Laravel's Task Scheduling. The benefit is you no longer need to configure the host machine's crontab. You create a simple container whose sole job is to trigger 'php artisan schedule:run' every minute. This ensures scheduled tasks run reliably across all environments without server-level configuration.",
    command: "php artisan schedule:run",
    examples: [
      { title: "No Host Crontab", code: "# Tasks execute reliably without touching the server OS", description: "Benefit." },
      { title: "Guaranteed Execution", code: "# The cron container runs continuously in the background", description: "Benefit." },
      { title: "Environment Parity", code: "# Scheduled tasks run in the exact same PHP context as the app", description: "Benefit." },
      { title: "Easy Deployment", code: "# Deploy the cron container alongside the web app effortlessly", description: "Benefit." },
      { title: "Separation of Concerns", code: "# Web containers don't waste cycles running cron loops", description: "Benefit." },
      { title: "Simple Setup", code: "command: sh -c \"while true; do php artisan schedule:run; sleep 60; done\"", description: "Elegant Docker Compose solution." },
      { title: "Automated Logging", code: "# Task output is captured natively by Docker logs", description: "Benefit." },
      { title: "Timezone Consistency", code: "# The container enforces the correct timezone for all tasks", description: "Benefit." },
      { title: "Scale Independent", code: "# Run one cron container while scaling the web app horizontally", description: "Benefit." },
      { title: "Failover Security", code: "# If the cron container crashes, Docker restarts it immediately", description: "Benefit." }
    ]
  },
  121: {
    longDescription: "The ultimate benefit of Docker for Laravel is the multi-stage production build. You compile Vite assets in a Node container, fetch dependencies in a Composer container, and copy only the final artifacts into a minimal PHP-FPM image. The result is a tiny, incredibly fast, and highly secure deployment artifact.",
    command: "docker build --target production",
    examples: [
      { title: "Massive Size Reduction", code: "# Final images drop from 1GB+ to ~50MB", description: "Benefit." },
      { title: "Ultimate Security", code: "# No development tools or source code compilers in production", description: "Benefit." },
      { title: "Self-Contained Artifacts", code: "# The image contains everything needed to run; no external fetches", description: "Benefit." },
      { title: "Blazing Fast Deploys", code: "# Small images pull and start almost instantly", description: "Benefit." },
      { title: "Perfect Optimization", code: "RUN php artisan config:cache", description: "Bake route and config caches directly into the image." },
      { title: "No Node Required", code: "# Compile JS/CSS without Node.js in the final server image", description: "Benefit." },
      { title: "Immutable Releases", code: "# If a build passes CI, it is guaranteed to run in production", description: "Benefit." },
      { title: "Clean Dependencies", code: "composer install --no-dev", description: "Ensure test packages never reach live servers." },
      { title: "Architecture Alignment", code: "# Match the exact PHP extensions required by the optimized app", description: "Benefit." },
      { title: "CI/CD Perfection", code: "# Pipelines just push the final stage to the registry", description: "Benefit." }
    ]
  }
};
