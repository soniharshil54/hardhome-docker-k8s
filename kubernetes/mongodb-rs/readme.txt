rs.status()
rs.initiate()
var cfg = rs.conf()
cfg.members[0].host = "mongo-0.mongo:27017"
rs.reconfig(cfg)
rs.status()
rs.add("mongo-1.mongo:27017")
rs.add("mongo-2.mongo:27017")

kubectl run mongo --rm -it --image mongo -- sh
# mongo mongodb://mongo-0.mongo,mongo-1.mongo,mongo-2.mongo

reference: https://www.youtube.com/watch?v=W-lJX3_uE5I