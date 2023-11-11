### Prerequisites

<ul>
  <li>Ensure that you have Docker and Docker-compose installed on your system. If not, you can download and install them from their respective official websites:
    <ul>
      <li><a href="https://docs.docker.com/get-docker/" target="_docker">Docker</a></li>
      <li><a href="https://docs.docker.com/compose/install/" target="_docker_compose">Docker Compose</a></li>
    </ul>
  </li>
  <li>
    Clone the Fleetbase repository to your local machine:
    <pre>git clone git@github.com:fleetbase/fleetbase.git</pre>
  </li>
  <li>
    Navigate to the cloned repository:
    <pre>cd fleetbase</pre>
  </li>
  <li>
    Initialize and pull submodules:
    <pre>git submodule update --init --recursive</pre>
  </li>
</ul>

### Build and Run Fleetbase

<ol>
  <li>
    <strong>Start the Docker daemon:</strong>
    Ensure the Docker daemon is running on your machine. You can either start Docker Desktop or either executed by running:
    <pre>service docker start</pre>
  </li>
  <li>
    <strong>Build the Docker containers:</strong>
Use Docker Compose to build and run the necessary containers. In the root directory of the Fleetbase repository, run:
  <pre>docker-compose up -d</pre>
  </li>
</ol>
