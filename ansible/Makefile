PLAYBOOKS=`ls *.yml`

run:
	for play in $(PLAYBOOKS); do ansible-playbook $$play -i inventory ;done

.PHONY: run
