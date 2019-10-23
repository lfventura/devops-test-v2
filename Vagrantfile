nodes = [
  {
    name: 'jenkins',
    ip: '10.12.0.10'
  },
  {
    name: 'docker',
    ip: '10.12.0.11'
  },
  {
    name: 'publisher',
    ip: '10.12.0.12'
  }
]

Vagrant.configure("2") do |config|
  config.ssh.private_key_path = ['.ssh/vagrant_rsa', '~/.vagrant.d/insecure_private_key']
  config.ssh.insert_key = false

  nodes.each do |node|
    config.vm.define node[:name] do |node_config|
      node_config.vm.box = 'centos/7'
      node_config.vm.hostname = "#{node[:name]}.local"
      node_config.vm.network :private_network, ip: node[:ip]
      node_config.vm.synced_folder 'apps', '/data/apps'
    end
  end

  config.vm.provision 'file', source: '.ssh/vagrant_rsa.pub', destination: '~/.ssh/authorized_keys'
  config.vm.provision 'ansible_local' do |ansible|
    ansible.playbook = 'vagrant.yml'
  end
end
