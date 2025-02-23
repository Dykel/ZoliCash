import os
import subprocess
import sys
from pathlib import Path

def start_backend():
    """Start the Django backend server."""
    backend_dir = Path(__file__).parent / "backend"
    os.chdir(backend_dir)
    print("Starting Django backend at http://localhost:8000...")
    subprocess.run([sys.executable, "manage.py", "runserver"], check=True)

def start_frontend():
    """Start the React frontend in a new terminal (manual step for now)."""
    frontend_dir = Path(__file__).parent / "frontend"
    os.chdir(frontend_dir)
    print("Starting React frontend at http://localhost:3000...")
    # For WSL, we can't easily run npm in same process due to node env
    subprocess.Popen(["bash", "-c", "npm start"], shell=False)
    print("Frontend started in a new process. Check http://localhost:3000.")

def main():
    """Main launcher function."""
    print("Launching ZoliCash...")
    
    # Ensure dependencies are installed
    backend_dir = Path(__file__).parent / "backend"
    frontend_dir = Path(__file__).parent / "frontend"
    
    # Check backend dependencies
    os.chdir(backend_dir)
    subprocess.run([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"], check=False)
    
    # Start backend in a subprocess
    backend_process = subprocess.Popen([sys.executable, "manage.py", "runserver"])
    
    # Prompt for frontend (or automate)
    choice = input("Start frontend now? (y/n): ")
    if choice.lower() == 'y':
        start_frontend()
    else:
        print("Run 'cd frontend && npm start' in another terminal to launch the frontend.")

    # Keep backend running until interrupted
    try:
        backend_process.wait()
    except KeyboardInterrupt:
        backend_process.terminate()
        print("ZoliCash stopped.")

if __name__ == "__main__":
    main()
