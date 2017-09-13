# How to deploy
`serverless deploy -v`

# How to run on AWS
`serverless invoke -f getUsage -l`

# How to run on local
`serverless invoke local -f getUsage`

# How to get logs
`serverless logs -f getUsage -t`

# How to get/set environment variables in powershell
`Get-ChildItem Env:`

`$env:NODE_DEBUG = 'request'`