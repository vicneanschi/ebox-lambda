# How to deploy
serverless deploy -v

# How to run
serverless invoke -f getUsage -l
serverless invoke local -f getUsage

# Get logs
serverless logs -f getUsage -t

# How to /get/set environment variables in powershell
Get-ChildItem Env:
$env:NODE_DEBUG = "request"