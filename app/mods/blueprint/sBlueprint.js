/**
 * Holds blueprint configs/meta/templates
 */
angular.module('mBlueprint').service('Blueprint', function() {
    /* Reset Bundle, True recalculates bundle configurations, False leaves current config,
     This is set to true duringcluste rimport and finalization of build cluster */
    this.resetBundle = true;
    /* Config items */
    this.configItems = {};
    /* HDFS Bundle */
    this.hdfsBundle = {'namenode': 2, 'zkfc': 2, 'journalnode': 3, 'zookeeper_server': 3};
    /* Yarn Bundle */
    this.yarnBundle = {'resourcemanager': 2, 'zookeeper_server': 3, 'historyserver': 1, 'app_timeline_server': 1};
    /* {String} hostgroupPfx prefix of host groups (e.g. host_group_ resolves to host_group_1...) */
    this.hostgroupPfx = 'host_group_';
    /* Config location typeahead */
    this.configLocations = ['admin-properties','capacity-scheduler','cluster-env','core-site','dbks-site','gateway-log4j','gateway-site','hadoop-env','hadoop-policy','hcat-env','hdfs-log4j','hdfs-site','hive-env','hive-exec-log4j','hive-log4j','hive-site','hiveserver2-site','kerberos-env','kms-env','kms-log4j','kms-properties','kms-site','knox-env','krb5-conf','ldap-log4j','mapred-env','mapred-site','oozie-site','pig-env','pig-log4j','pig-properties','ranger-admin-site','ranger-env','ranger-hdfs-audit','ranger-hdfs-plugin-properties','ranger-hdfs-policymgr-ssl','ranger-hdfs-security','ranger-hive-audit','ranger-hive-plugin-properties','ranger-hive-policymgr-ssl','ranger-hive-security','ranger-kms-audit','ranger-kms-policymgr-ssl','ranger-kms-security','ranger-kms-site','ranger-knox-audit','ranger-knox-plugin-properties','ranger-knox-policymgr-ssl','ranger-knox-security','ranger-ugsync-site','ranger-yarn-audit','ranger-yarn-plugin-properties','ranger-yarn-policymgr-ssl','ranger-yarn-security','spark-defaults','spark-env','spark-javaopts-properties','spark-log4j-properties','spark-metrics-properties','ssl-client','ssl-server','tez-env','tez-site','topology','users-ldif','usersync-properties','webhcat-env','webhcat-log4j','webhcat-site','yarn-env','yarn-log4j','yarn-site','zoo.cfg','zookeeper-env','zookeeper-log4j'];

    // TODO: load from external source!!
    this.configIds = ['ambari.hive.db.schema.name','autopurge.purgeinterval','autopurge.snapretaincount','clientport','common.name.for.certificate','content','datadir','datanucleus.autocreateschema','datanucleus.cache.level2.type','dfs.block.access.token.enable','dfs.blockreport.initialdelay','dfs.blocksize','dfs.client.read.shortcircuit','dfs.client.read.shortcircuit.streams.cache.size','dfs.client.retry.policy.enabled','dfs.cluster.administrators','dfs.datanode.address','dfs.datanode.balance.bandwidthpersec','dfs.datanode.data.dir','dfs.datanode.data.dir.mount.file','dfs.datanode.data.dir.perm','dfs.datanode.du.reserved','dfs.datanode.failed.volumes.tolerated','dfs.datanode.http.address','dfs.datanode.https.address','dfs.datanode.ipc.address','dfs.datanode.kerberos.principal','dfs.datanode.keytab.file','dfs.datanode.max.transfer.threads','dfs.domain.socket.path','dfs.encrypt.data.transfer.cipher.suites','dfs.encryption.key.provider.uri','dfs.heartbeat.interval','dfs.hosts.exclude','dfs.http.policy','dfs.https.port','dfs.journalnode.edits.dir','dfs.journalnode.http-address','dfs.journalnode.https-address','dfs.namenode.accesstime.precision','dfs.namenode.audit.log.async','dfs.namenode.avoid.read.stale.datanode','dfs.namenode.avoid.write.stale.datanode','dfs.namenode.checkpoint.dir','dfs.namenode.checkpoint.edits.dir','dfs.namenode.checkpoint.period','dfs.namenode.checkpoint.txns','dfs.namenode.fslock.fair','dfs.namenode.handler.count','dfs.namenode.http-address','dfs.namenode.https-address','dfs.namenode.inode.attributes.provider.class','dfs.namenode.kerberos.internal.spnego.principal','dfs.namenode.kerberos.principal','dfs.namenode.keytab.file','dfs.namenode.name.dir','dfs.namenode.name.dir.restore','dfs.namenode.rpc-address','dfs.namenode.safemode.threshold-pct','dfs.namenode.secondary.http-address','dfs.namenode.stale.datanode.interval','dfs.namenode.startup.delay.block.deletion.sec','dfs.namenode.write.stale.datanode.ratio','dfs.permissions.enabled','dfs.permissions.superusergroup','dfs.replication','dfs.replication.max','dfs.secondary.namenode.kerberos.internal.spnego.principal','dfs.secondary.namenode.kerberos.principal','dfs.secondary.namenode.keytab.file','dfs.support.append','dfs.web.authentication.kerberos.keytab','dfs.web.authentication.kerberos.principal','dfs.webhdfs.enabled','domains','fs.defaultfs','fs.permissions.umask-mode','fs.trash.interval','gateway.gateway.conf.dir','gateway.hadoop.kerberos.secured','gateway.path','gateway.port','ha.failover-controller.active-standby-elector.zk.op.retries','hadoop.http.authentication.cookie.domain','hadoop.http.authentication.kerberos.keytab','hadoop.http.authentication.kerberos.principal','hadoop.http.authentication.signature.secret.file','hadoop.http.authentication.simple.anonymous.allowed','hadoop.http.authentication.type','hadoop.http.filter.initializers','hadoop.kms.audit.aggregation.window.ms','hadoop.kms.authentication.kerberos.keytab','hadoop.kms.authentication.kerberos.name.rules','hadoop.kms.authentication.kerberos.principal','hadoop.kms.authentication.signer.secret.provider','hadoop.kms.authentication.signer.secret.provider.zookeeper.auth.type','hadoop.kms.authentication.signer.secret.provider.zookeeper.connection.string','hadoop.kms.authentication.signer.secret.provider.zookeeper.kerberos.keytab','hadoop.kms.authentication.signer.secret.provider.zookeeper.kerberos.principal','hadoop.kms.authentication.signer.secret.provider.zookeeper.path','hadoop.kms.authentication.type','hadoop.kms.cache.enable','hadoop.kms.cache.timeout.ms','hadoop.kms.current.key.cache.timeout.ms','hadoop.kms.key.provider.uri','hadoop.kms.security.authorization.manager','hadoop.proxyuser.hcat.groups','hadoop.proxyuser.hcat.hosts','hadoop.proxyuser.hdfs.groups','hadoop.proxyuser.hdfs.hosts','hadoop.proxyuser.hive.groups','hadoop.proxyuser.hive.hosts','hadoop.proxyuser.http.groups','hadoop.proxyuser.http.hosts','hadoop.proxyuser.knox.groups','hadoop.proxyuser.knox.hosts','hadoop.proxyuser.ranger.groups','hadoop.proxyuser.ranger.hosts','hadoop.proxyuser.root.groups','hadoop.proxyuser.root.hosts','hadoop.proxyuser.yarn.groups','hadoop.proxyuser.yarn.hosts','hadoop.registry.rm.enabled','hadoop.registry.zk.quorum','hadoop.rpc.protection','hadoop.security.authentication','hadoop.security.authorization','hadoop.security.key.provider.path','hadoop.security.keystore.javakeystoreprovider.password','hive.auto.convert.join','hive.auto.convert.join.noconditionaltask','hive.auto.convert.join.noconditionaltask.size','hive.auto.convert.sortmerge.join','hive.auto.convert.sortmerge.join.to.mapjoin','hive.cbo.enable','hive.cli.print.header','hive.cluster.delegation.token.store.class','hive.cluster.delegation.token.store.zookeeper.connectstring','hive.cluster.delegation.token.store.zookeeper.znode','hive.compactor.abortedtxn.threshold','hive.compactor.check.interval','hive.compactor.delta.num.threshold','hive.compactor.delta.pct.threshold','hive.compactor.initiator.on','hive.compactor.worker.threads','hive.compactor.worker.timeout','hive.compute.query.using.stats','hive.conf.restricted.list','hive.convert.join.bucket.mapjoin.tez','hive.default.fileformat','hive.default.fileformat.managed','hive.enforce.bucketing','hive.enforce.sorting','hive.enforce.sortmergebucketmapjoin','hive.exec.compress.intermediate','hive.exec.compress.output','hive.exec.dynamic.partition','hive.exec.dynamic.partition.mode','hive.exec.failure.hooks','hive.exec.max.created.files','hive.exec.max.dynamic.partitions','hive.exec.max.dynamic.partitions.pernode','hive.exec.orc.compression.strategy','hive.exec.orc.default.compress','hive.exec.orc.default.stripe.size','hive.exec.orc.encoding.strategy','hive.exec.parallel','hive.exec.parallel.thread.number','hive.exec.post.hooks','hive.exec.pre.hooks','hive.exec.reducers.bytes.per.reducer','hive.exec.reducers.max','hive.exec.scratchdir','hive.exec.submit.local.task.via.child','hive.exec.submitviachild','hive.execution.engine','hive.fetch.task.aggr','hive.fetch.task.conversion','hive.fetch.task.conversion.threshold','hive.limit.optimize.enable','hive.limit.pushdown.memory.usage','hive.map.aggr','hive.map.aggr.hash.force.flush.memory.threshold','hive.map.aggr.hash.min.reduction','hive.map.aggr.hash.percentmemory','hive.mapjoin.bucket.cache.size','hive.mapjoin.optimized.hashtable','hive.mapred.reduce.tasks.speculative.execution','hive.merge.mapfiles','hive.merge.mapredfiles','hive.merge.orcfile.stripe.level','hive.merge.rcfile.block.level','hive.merge.size.per.task','hive.merge.smallfiles.avgsize','hive.merge.tezfiles','hive.metastore.authorization.storage.checks','hive.metastore.cache.pinobjtypes','hive.metastore.client.connect.retry.delay','hive.metastore.client.socket.timeout','hive.metastore.connect.retries','hive.metastore.execute.setugi','hive.metastore.failure.retries','hive.metastore.kerberos.keytab.file','hive.metastore.kerberos.principal','hive.metastore.pre.event.listeners','hive.metastore.sasl.enabled','hive.metastore.server.max.threads','hive.metastore.uris','hive.metastore.warehouse.dir','hive.optimize.bucketmapjoin','hive.optimize.bucketmapjoin.sortedmerge','hive.optimize.constant.propagation','hive.optimize.index.filter','hive.optimize.metadataonly','hive.optimize.null.scan','hive.optimize.reducededuplication','hive.optimize.reducededuplication.min.reducer','hive.optimize.sort.dynamic.partition','hive.orc.compute.splits.num.threads','hive.orc.splits.include.file.footer','hive.prewarm.enabled','hive.prewarm.numcontainers','hive.security.authenticator.manager','hive.security.authorization.enabled','hive.security.authorization.manager','hive.security.metastore.authenticator.manager','hive.security.metastore.authorization.auth.reads','hive.security.metastore.authorization.manager','hive.server2.allow.user.substitution','hive.server2.authentication','hive.server2.authentication.kerberos.keytab','hive.server2.authentication.kerberos.principal','hive.server2.authentication.spnego.keytab','hive.server2.authentication.spnego.principal','hive.server2.enable.doas','hive.server2.logging.operation.enabled','hive.server2.logging.operation.log.location','hive.server2.support.dynamic.service.discovery','hive.server2.table.type.mapping','hive.server2.tez.default.queues','hive.server2.tez.initialize.default.sessions','hive.server2.tez.sessions.per.default.queue','hive.server2.thrift.http.path','hive.server2.thrift.http.port','hive.server2.thrift.max.worker.threads','hive.server2.thrift.port','hive.server2.thrift.sasl.qop','hive.server2.transport.mode','hive.server2.use.ssl','hive.server2.zookeeper.namespace','hive.smbjoin.cache.rows','hive.stats.autogather','hive.stats.dbclass','hive.stats.fetch.column.stats','hive.stats.fetch.partition.stats','hive.support.concurrency','hive.tez.auto.reducer.parallelism','hive.tez.container.size','hive.tez.cpu.vcores','hive.tez.dynamic.partition.pruning','hive.tez.dynamic.partition.pruning.max.data.size','hive.tez.dynamic.partition.pruning.max.event.size','hive.tez.input.format','hive.tez.java.opts','hive.tez.log.level','hive.tez.max.partition.factor','hive.tez.min.partition.factor','hive.tez.smb.number.waves','hive.txn.manager','hive.txn.max.open.batch','hive.txn.timeout','hive.user.install.directory','hive.vectorized.execution.enabled','hive.vectorized.execution.reduce.enabled','hive.vectorized.groupby.checkinterval','hive.vectorized.groupby.flush.percent','hive.vectorized.groupby.maxentries','hive.zookeeper.client.port','hive.zookeeper.namespace','hive.zookeeper.quorum','initlimit','io.compression.codecs','io.file.buffer.size','io.serializations','ipc.client.connect.max.retries','ipc.client.connection.maxidletime','ipc.client.idlethreshold','ipc.server.tcpnodelay','java.security.auth.login.config','java.security.krb5.conf','javax.jdo.option.connectiondrivername','javax.jdo.option.connectionpassword','javax.jdo.option.connectionurl','javax.jdo.option.connectionusername','jdbc.driverclassname','mapreduce.admin.map.child.java.opts','mapreduce.admin.reduce.child.java.opts','mapreduce.admin.user.env','mapreduce.am.max-attempts','mapreduce.application.classpath','mapreduce.application.framework.path','mapreduce.cluster.administrators','mapreduce.framework.name','mapreduce.job.counters.max','mapreduce.job.emit-timeline-data','mapreduce.job.reduce.slowstart.completedmaps','mapreduce.jobhistory.address','mapreduce.jobhistory.bind-host','mapreduce.jobhistory.done-dir','mapreduce.jobhistory.intermediate-done-dir','mapreduce.jobhistory.keytab','mapreduce.jobhistory.principal','mapreduce.jobhistory.recovery.enable','mapreduce.jobhistory.recovery.store.class','mapreduce.jobhistory.recovery.store.leveldb.path','mapreduce.jobhistory.webapp.address','mapreduce.jobhistory.webapp.spnego-keytab-file','mapreduce.jobhistory.webapp.spnego-principal','mapreduce.jobtracker.webinterface.trusted','mapreduce.map.java.opts','mapreduce.map.log.level','mapreduce.map.memory.mb','mapreduce.map.output.compress','mapreduce.map.sort.spill.percent','mapreduce.map.speculative','mapreduce.output.fileoutputformat.compress','mapreduce.output.fileoutputformat.compress.type','mapreduce.reduce.input.buffer.percent','mapreduce.reduce.java.opts','mapreduce.reduce.log.level','mapreduce.reduce.memory.mb','mapreduce.reduce.shuffle.fetch.retry.enabled','mapreduce.reduce.shuffle.fetch.retry.interval-ms','mapreduce.reduce.shuffle.fetch.retry.timeout-ms','mapreduce.reduce.shuffle.input.buffer.percent','mapreduce.reduce.shuffle.merge.percent','mapreduce.reduce.shuffle.parallelcopies','mapreduce.reduce.speculative','mapreduce.shuffle.port','mapreduce.task.io.sort.factor','mapreduce.task.io.sort.mb','mapreduce.task.timeout','net.topology.script.file.name','nfs.exports.allowed.hosts','nfs.file.dump.dir','oozie.service.proxyuserservice.proxyuser.knox.groups','oozie.service.proxyuserservice.proxyuser.knox.hosts','ranger-hdfs-plugin-enabled','ranger-knox-plugin-enabled','ranger-yarn-plugin-enabled','ranger.audit.solr.password','ranger.audit.solr.urls','ranger.audit.solr.username','ranger.audit.solr.zookeepers','ranger.audit.source.type','ranger.authentication.method','ranger.contextname','ranger.credential.provider.path','ranger.db.encrypt.key.password','ranger.externalurl','ranger.https.attrib.keystore.file','ranger.jpa.audit.jdbc.credential.alias','ranger.jpa.audit.jdbc.dialect','ranger.jpa.audit.jdbc.driver','ranger.jpa.audit.jdbc.password','ranger.jpa.audit.jdbc.url','ranger.jpa.audit.jdbc.user','ranger.jpa.jdbc.credential.alias','ranger.jpa.jdbc.dialect','ranger.jpa.jdbc.driver','ranger.jpa.jdbc.password','ranger.jpa.jdbc.url','ranger.jpa.jdbc.user','ranger.ks.jdbc.sqlconnectorjar','ranger.ks.jpa.jdbc.credential.alias','ranger.ks.jpa.jdbc.credential.provider.path','ranger.ks.jpa.jdbc.dialect','ranger.ks.jpa.jdbc.driver','ranger.ks.jpa.jdbc.password','ranger.ks.jpa.jdbc.url','ranger.ks.jpa.jdbc.user','ranger.ks.masterkey.credential.alias','ranger.ldap.ad.domain','ranger.ldap.ad.url','ranger.ldap.group.roleattribute','ranger.ldap.group.searchbase','ranger.ldap.group.searchfilter','ranger.ldap.url','ranger.ldap.user.dnpattern','ranger.plugin.hdfs.policy.cache.dir','ranger.plugin.hdfs.policy.pollintervalms','ranger.plugin.hdfs.policy.rest.ssl.config.file','ranger.plugin.hdfs.policy.rest.url','ranger.plugin.hdfs.policy.source.impl','ranger.plugin.hdfs.service.name','ranger.plugin.hive.policy.cache.dir','ranger.plugin.hive.policy.pollintervalms','ranger.plugin.hive.policy.rest.ssl.config.file','ranger.plugin.hive.policy.rest.url','ranger.plugin.hive.policy.source.impl','ranger.plugin.hive.service.name','ranger.plugin.kms.policy.cache.dir','ranger.plugin.kms.policy.pollintervalms','ranger.plugin.kms.policy.rest.ssl.config.file','ranger.plugin.kms.policy.rest.url','ranger.plugin.kms.policy.source.impl','ranger.plugin.kms.service.name','ranger.plugin.knox.policy.cache.dir','ranger.plugin.knox.policy.pollintervalms','ranger.plugin.knox.policy.rest.ssl.config.file','ranger.plugin.knox.policy.rest.url','ranger.plugin.knox.policy.source.impl','ranger.plugin.knox.service.name','ranger.plugin.yarn.policy.cache.dir','ranger.plugin.yarn.policy.pollintervalms','ranger.plugin.yarn.policy.rest.ssl.config.file','ranger.plugin.yarn.policy.rest.url','ranger.plugin.yarn.policy.source.impl','ranger.plugin.yarn.service.name','ranger.service.host','ranger.service.http.enabled','ranger.service.http.port','ranger.service.https.attrib.clientauth','ranger.service.https.attrib.keystore.keyalias','ranger.service.https.attrib.keystore.pass','ranger.service.https.attrib.ssl.enabled','ranger.service.https.port','ranger.service.shutdown.port','ranger.unixauth.remote.login.enabled','ranger.unixauth.service.hostname','ranger.unixauth.service.port','ranger.usersync.credstore.filename','ranger.usersync.enabled','ranger.usersync.filesource.file','ranger.usersync.filesource.text.delimiter','ranger.usersync.group.memberattributename','ranger.usersync.group.nameattribute','ranger.usersync.group.objectclass','ranger.usersync.group.searchbase','ranger.usersync.group.searchenabled','ranger.usersync.group.searchfilter','ranger.usersync.group.searchscope','ranger.usersync.group.usermapsyncenabled','ranger.usersync.keystore.file','ranger.usersync.keystore.password','ranger.usersync.ldap.bindalias','ranger.usersync.ldap.binddn','ranger.usersync.ldap.bindkeystore','ranger.usersync.ldap.groupname.caseconversion','ranger.usersync.ldap.ldapbindpassword','ranger.usersync.ldap.searchbase','ranger.usersync.ldap.url','ranger.usersync.ldap.user.groupnameattribute','ranger.usersync.ldap.user.nameattribute','ranger.usersync.ldap.user.objectclass','ranger.usersync.ldap.user.searchbase','ranger.usersync.ldap.user.searchfilter','ranger.usersync.ldap.user.searchscope','ranger.usersync.ldap.username.caseconversion','ranger.usersync.logdir','ranger.usersync.pagedresultsenabled','ranger.usersync.pagedresultssize','ranger.usersync.passwordvalidator.path','ranger.usersync.policymanager.baseurl','ranger.usersync.policymanager.maxrecordsperapicall','ranger.usersync.policymanager.mockrun','ranger.usersync.port','ranger.usersync.sink.impl.class','ranger.usersync.sleeptimeinmillisbetweensynccycle','ranger.usersync.source.impl.class','ranger.usersync.ssl','ranger.usersync.truststore.file','ranger.usersync.truststore.password','ranger.usersync.unix.minuserid','realm','security.admin.operations.protocol.acl','security.client.datanode.protocol.acl','security.client.protocol.acl','security.datanode.protocol.acl','security.inter.datanode.protocol.acl','security.inter.tracker.protocol.acl','security.job.client.protocol.acl','security.job.task.protocol.acl','security.namenode.protocol.acl','security.refresh.policy.protocol.acl','security.refresh.usertogroups.mappings.protocol.acl','smokeuser','spark.driver.extrajavaoptions','spark.history.kerberos.keytab','spark.history.kerberos.principal','spark.history.provider','spark.history.ui.port','spark.yarn.am.extrajavaoptions','spark.yarn.applicationmaster.waittries','spark.yarn.containerlaunchermaxthreads','spark.yarn.driver.memoryoverhead','spark.yarn.executor.memoryoverhead','spark.yarn.historyserver.address','spark.yarn.max.executor.failures','spark.yarn.preserve.staging.files','spark.yarn.queue','spark.yarn.scheduler.heartbeat.interval-ms','spark.yarn.services','spark.yarn.submit.file.replication','ssl.client.keystore.location','ssl.client.keystore.password','ssl.client.keystore.type','ssl.client.truststore.location','ssl.client.truststore.password','ssl.client.truststore.reload.interval','ssl.client.truststore.type','ssl.server.keystore.keypassword','ssl.server.keystore.location','ssl.server.keystore.password','ssl.server.keystore.type','ssl.server.truststore.location','ssl.server.truststore.password','ssl.server.truststore.reload.interval','ssl.server.truststore.type','sun.security.krb5.debug','synclimit','templeton.exec.timeout','templeton.hadoop','templeton.hadoop.conf.dir','templeton.hcat','templeton.hcat.home','templeton.hive.archive','templeton.hive.extra.files','templeton.hive.home','templeton.hive.path','templeton.hive.properties','templeton.jar','templeton.kerberos.keytab','templeton.kerberos.principal','templeton.kerberos.secret','templeton.libjars','templeton.override.enabled','templeton.pig.archive','templeton.pig.path','templeton.port','templeton.python','templeton.sqoop.archive','templeton.sqoop.home','templeton.sqoop.path','templeton.storage.class','templeton.streaming.jar','templeton.zookeeper.hosts','tez.am.am-rm.heartbeat.interval-ms.max','tez.am.container.idle.release-timeout-max.millis','tez.am.container.idle.release-timeout-min.millis','tez.am.container.reuse.enabled','tez.am.container.reuse.locality.delay-allocation-millis','tez.am.container.reuse.non-local-fallback.enabled','tez.am.container.reuse.rack-fallback.enabled','tez.am.launch.cluster-default.cmd-opts','tez.am.launch.cmd-opts','tez.am.launch.env','tez.am.log.level','tez.am.max.app.attempts','tez.am.maxtaskfailures.per.node','tez.am.resource.memory.mb','tez.am.tez-ui.history-url.template','tez.am.view-acls','tez.cluster.additional.classpath.prefix','tez.counters.max','tez.counters.max.groups','tez.generate.debug.artifacts','tez.grouping.max-size','tez.grouping.min-size','tez.grouping.split-waves','tez.history.logging.service.class','tez.lib.uris','tez.runtime.compress','tez.runtime.compress.codec','tez.runtime.convert.user-payload.to.history-text','tez.runtime.io.sort.mb','tez.runtime.optimize.local.fetch','tez.runtime.pipelined.sorter.sort.threads','tez.runtime.sorter.class','tez.runtime.unordered.output.buffer.size-mb','tez.session.am.dag.submit.timeout.secs','tez.session.client.timeout.secs','tez.shuffle-vertex-manager.max-src-fraction','tez.shuffle-vertex-manager.min-src-fraction','tez.staging-dir','tez.task.am.heartbeat.counter.interval-ms.max','tez.task.generate.counters.per.io','tez.task.get-task.sleep.interval-ms.max','tez.task.launch.cluster-default.cmd-opts','tez.task.launch.cmd-opts','tez.task.launch.env','tez.task.max-events-per-heartbeat','tez.task.resource.memory.mb','tez.tez-ui.history-url.base','tez.use.cluster.hadoop-libs','ticktime','webhcat.proxyuser.knox.groups','webhcat.proxyuser.knox.hosts','xa.webapp.dir','xasecure.add-hadoop-authorization','xasecure.audit.credential.provider.file','xasecure.audit.destination.db','xasecure.audit.destination.db.batch.filespool.dir','xasecure.audit.destination.db.jdbc.driver','xasecure.audit.destination.db.jdbc.url','xasecure.audit.destination.db.password','xasecure.audit.destination.db.user','xasecure.audit.destination.hdfs','xasecure.audit.destination.hdfs.batch.filespool.dir','xasecure.audit.destination.hdfs.dir','xasecure.audit.destination.solr','xasecure.audit.destination.solr.batch.filespool.dir','xasecure.audit.destination.solr.urls','xasecure.audit.destination.solr.zookeepers','xasecure.audit.is.enabled','xasecure.audit.provider.summary.enabled','xasecure.hive.update.xapolicies.on.grant.revoke','xasecure.policymgr.clientssl.keystore','xasecure.policymgr.clientssl.keystore.credential.file','xasecure.policymgr.clientssl.keystore.password','xasecure.policymgr.clientssl.truststore','xasecure.policymgr.clientssl.truststore.credential.file','xasecure.policymgr.clientssl.truststore.password','yarn.acl.enable','yarn.admin.acl','yarn.app.mapreduce.am.admin-command-opts','yarn.app.mapreduce.am.command-opts','yarn.app.mapreduce.am.log.level','yarn.app.mapreduce.am.resource.mb','yarn.app.mapreduce.am.staging-dir','yarn.application.classpath','yarn.client.nodemanager-connect.max-wait-ms','yarn.client.nodemanager-connect.retry-interval-ms','yarn.http.policy','yarn.log-aggregation-enable','yarn.log-aggregation.retain-seconds','yarn.log.server.url','yarn.node-labels.enabled','yarn.node-labels.fs-store.retry-policy-spec','yarn.node-labels.fs-store.root-dir','yarn.nodemanager.address','yarn.nodemanager.admin-env','yarn.nodemanager.aux-services','yarn.nodemanager.bind-host','yarn.nodemanager.container-executor.class','yarn.nodemanager.container-monitor.interval-ms','yarn.nodemanager.delete.debug-delay-sec','yarn.nodemanager.disk-health-checker.max-disk-utilization-per-disk-percentage','yarn.nodemanager.disk-health-checker.min-free-space-per-disk-mb','yarn.nodemanager.disk-health-checker.min-healthy-disks','yarn.nodemanager.health-checker.interval-ms','yarn.nodemanager.health-checker.script.timeout-ms','yarn.nodemanager.keytab','yarn.nodemanager.linux-container-executor.cgroups.hierarchy','yarn.nodemanager.linux-container-executor.cgroups.mount','yarn.nodemanager.linux-container-executor.cgroups.mount-path','yarn.nodemanager.linux-container-executor.cgroups.strict-resource-usage','yarn.nodemanager.linux-container-executor.group','yarn.nodemanager.linux-container-executor.resources-handler.class','yarn.nodemanager.local-dirs','yarn.nodemanager.log-aggregation.compression-type','yarn.nodemanager.log-aggregation.debug-enabled','yarn.nodemanager.log-aggregation.num-log-files-per-app','yarn.nodemanager.log-aggregation.roll-monitoring-interval-seconds','yarn.nodemanager.log-dirs','yarn.nodemanager.log.retain-second','yarn.nodemanager.principal','yarn.nodemanager.recovery.dir','yarn.nodemanager.recovery.enabled','yarn.nodemanager.remote-app-log-dir','yarn.nodemanager.remote-app-log-dir-suffix','yarn.nodemanager.resource.cpu-vcores','yarn.nodemanager.resource.memory-mb','yarn.nodemanager.resource.percentage-physical-cpu-limit','yarn.nodemanager.vmem-check-enabled','yarn.nodemanager.vmem-pmem-ratio','yarn.nodemanager.webapp.spnego-keytab-file','yarn.nodemanager.webapp.spnego-principal','yarn.resourcemanager.address','yarn.resourcemanager.admin.address','yarn.resourcemanager.am.max-attempts','yarn.resourcemanager.bind-host','yarn.resourcemanager.connect.max-wait.ms','yarn.resourcemanager.connect.retry-interval.ms','yarn.resourcemanager.fs.state-store.retry-policy-spec','yarn.resourcemanager.fs.state-store.uri','yarn.resourcemanager.ha.enabled','yarn.resourcemanager.hostname','yarn.resourcemanager.keytab','yarn.resourcemanager.nodes.exclude-path','yarn.resourcemanager.principal','yarn.resourcemanager.proxy-user-privileges.enabled','yarn.resourcemanager.recovery.enabled','yarn.resourcemanager.resource-tracker.address','yarn.resourcemanager.scheduler.address','yarn.resourcemanager.scheduler.class','yarn.resourcemanager.scheduler.monitor.enable','yarn.resourcemanager.state-store.max-completed-applications','yarn.resourcemanager.store.class','yarn.resourcemanager.system-metrics-publisher.dispatcher.pool-size','yarn.resourcemanager.system-metrics-publisher.enabled','yarn.resourcemanager.webapp.address','yarn.resourcemanager.webapp.delegation-token-auth-filter.enabled','yarn.resourcemanager.webapp.https.address','yarn.resourcemanager.webapp.spnego-keytab-file','yarn.resourcemanager.webapp.spnego-principal','yarn.resourcemanager.work-preserving-recovery.enabled','yarn.resourcemanager.work-preserving-recovery.scheduling-wait-ms','yarn.resourcemanager.zk-acl','yarn.resourcemanager.zk-address','yarn.resourcemanager.zk-num-retries','yarn.resourcemanager.zk-retry-interval-ms','yarn.resourcemanager.zk-state-store.parent-path','yarn.resourcemanager.zk-timeout-ms','yarn.scheduler.capacity.default.minimum-user-limit-percent','yarn.scheduler.capacity.maximum-am-resource-percent','yarn.scheduler.capacity.maximum-applications','yarn.scheduler.capacity.node-locality-delay','yarn.scheduler.capacity.resource-calculator','yarn.scheduler.capacity.root.accessible-node-labels','yarn.scheduler.capacity.root.capacity','yarn.scheduler.capacity.root.default.capacity','yarn.scheduler.capacity.root.default.maximum-capacity','yarn.scheduler.capacity.root.default.state','yarn.scheduler.capacity.root.default.user-limit-factor','yarn.scheduler.capacity.root.queues','yarn.scheduler.maximum-allocation-mb','yarn.scheduler.maximum-allocation-vcores','yarn.scheduler.minimum-allocation-mb','yarn.scheduler.minimum-allocation-vcores','yarn.timeline-service.address','yarn.timeline-service.bind-host','yarn.timeline-service.client.max-retries','yarn.timeline-service.client.retry-interval-ms','yarn.timeline-service.enabled','yarn.timeline-service.generic-application-history.store-class','yarn.timeline-service.http-authentication.cookie.domain','yarn.timeline-service.http-authentication.cookie.path','yarn.timeline-service.http-authentication.kerberos.keytab','yarn.timeline-service.http-authentication.kerberos.name.rules','yarn.timeline-service.http-authentication.kerberos.principal','yarn.timeline-service.http-authentication.signature.secret','yarn.timeline-service.http-authentication.signature.secret.file','yarn.timeline-service.http-authentication.signer.secret.provider','yarn.timeline-service.http-authentication.signer.secret.provider.object','yarn.timeline-service.http-authentication.simple.anonymous.allowed','yarn.timeline-service.http-authentication.token.validity','yarn.timeline-service.http-authentication.type','yarn.timeline-service.keytab','yarn.timeline-service.leveldb-state-store.path','yarn.timeline-service.leveldb-timeline-store.path','yarn.timeline-service.leveldb-timeline-store.read-cache-size','yarn.timeline-service.leveldb-timeline-store.start-time-read-cache-size','yarn.timeline-service.leveldb-timeline-store.start-time-write-cache-size','yarn.timeline-service.leveldb-timeline-store.ttl-interval-ms','yarn.timeline-service.principal','yarn.timeline-service.recovery.enabled','yarn.timeline-service.state-store-class','yarn.timeline-service.store-class','yarn.timeline-service.ttl-enable','yarn.timeline-service.ttl-ms','yarn.timeline-service.webapp.address','yarn.timeline-service.webapp.https.address'];
});

