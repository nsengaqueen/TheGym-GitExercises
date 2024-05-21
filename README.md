## Git Advanced Exercises 2
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git branch
* master
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git branch ft/new-feature
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git checkout ft/new-feature
Switched to branch 'ft/new-feature'
D       test3.md
D       test4.md
D       unwanted.txt
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git add .
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git commit -m "Implemented core functionality for new feature"   
[ft/new-feature 6730ffa] Implemented core functionality for new feature
 6 files changed, 2 insertions(+), 1 deletion(-)
 create mode 100644 feature.txt
 delete mode 100644 test1.md
 delete mode 100644 test2.md
 delete mode 100644 test3.md
 delete mode 100644 test4.md
 delete mode 100644 unwanted.txt
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git checkout main
error: pathspec 'main' did not match any file(s) known to git
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git checkout master
Switched to branch 'master'
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git add .
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git commit -m "Updated project readme" 
[master e42479a] Updated project readme
 1 file changed, 1 insertion(+)
 create mode 100644 readme.txt
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git pull origin main
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git pull origin master
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git pull  master      
fatal: 'master' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git pull origin master
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git checkout ft/new-feature
Switched to branch 'ft/new-feature'
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git add .
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git commit -m "adding feature"
On branch ft/new-feature
nothing to commit, working tree clean
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git push
fatal: No configured push destination.
Either specify the URL from the command-line or configure a remote repository using

    git remote add <name> <url>

and then push using the remote name

    git push <name>

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises>    git remote add GitAdvancedExercises  https://github.com/nsengaqueen/TheGym-GitExercises.git
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git push
fatal: The current branch ft/new-feature has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream GitAdvancedExercises ft/new-feature

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises>   git push --set-upstream GitAdvancedExercises ft/new-feature
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 12 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (11/11), 1007 bytes | 1007.00 KiB/s, done.
Total 11 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/nsengaqueen/TheGym-GitExercises.git
 * [new branch]      ft/new-feature -> ft/new-feature
branch 'ft/new-feature' set up to track 'GitAdvancedExercises/ft/new-feature'.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git checkout master
Switched to branch 'master'
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git pull origin master
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git checkout master
Already on 'master'
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git add .
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git commit -m "adding master changes"
On branch master
nothing to commit, working tree clean
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream GitAdvancedExercises master

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises>   git push --set-upstream GitAdvancedExercises master
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 312 bytes | 312.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/nsengaqueen/TheGym-GitExercises/pull/new/master
remote:
To https://github.com/nsengaqueen/TheGym-GitExercises.git
 * [new branch]      master -> master
branch 'master' set up to track 'GitAdvancedExercises/master'.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git pull origin master
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git pull master       
fatal: 'master' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git pull              
Already up to date.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git merge ft/feature
merge: ft/feature - not something we can merge
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git merge  ft/new-feature
Merge made by the 'ort' strategy.
 feature.txt  | 2 ++
 test1.md     | 0
 test2.md     | 0
 test3.md     | 0
 test4.md     | 0
 unwanted.txt | 1 -
 6 files changed, 2 insertions(+), 1 deletion(-)
 create mode 100644 feature.txt
 delete mode 100644 test1.md
 delete mode 100644 test2.md
 delete mode 100644 test3.md
 delete mode 100644 test4.md
 delete mode 100644 unwanted.txt
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git commit -m "merged main and feature"
On branch master
Your branch is ahead of 'GitAdvancedExercises/master' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 305 bytes | 305.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/nsengaqueen/TheGym-GitExercises.git
   e42479a..cbd6f0c  master -> master
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git branch -d ft/new-feature 
Deleted branch ft/new-feature (was 6730ffa).
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git log
commit cbd6f0c3c62e2a98772aa827cf95c2f3b3323853 (HEAD -> master, GitAdvancedExercises/master)
Merge: e42479a 6730ffa
Author: queen <nsengaqueen123@gmail.com>
Date:   Tue May 21 14:50:46 2024 +0200

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> 
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git checkout -b ft/new-branch-from-commit cbd6f0c3c62e2a98772aa827cf95c2f3b3323853 
Switched to a new branch 'ft/new-branch-from-commit'
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git add .
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git commit -m "adding new.txt in new branchfromcommit"
[ft/new-branch-from-commit 239ab08] adding new.txt in new branchfromcommit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 new.txt
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git push
fatal: The current branch ft/new-branch-from-commit has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream GitAdvancedExercises ft/new-branch-from-commit

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git push --set-upstream GitAdvancedExercises ft/new-branch-from-commit
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 320 bytes | 320.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: Create a pull request for 'ft/new-branch-from-commit' on GitHub by visiting:
remote:      https://github.com/nsengaqueen/TheGym-GitExercises/pull/new/ft/new-branch-from-commit
remote:
To https://github.com/nsengaqueen/TheGym-GitExercises.git
 * [new branch]      ft/new-branch-from-commit -> ft/new-branch-from-commit
branch 'ft/new-branch-from-commit' set up to track 'GitAdvancedExercises/ft/new-branch-from-commit'.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git checkout master
Switched to branch 'master'
Your branch is up to date with 'GitAdvancedExercises/master'.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git pull
Already up to date.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git pull ft/new-branch-from-commit
fatal: 'ft/new-branch-from-commit' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git pull origin main              
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git pull 
Already up to date.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git merge ft/new-branch-from-commit
Updating cbd6f0c..239ab08
Fast-forward
 new.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 new.txt
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git push
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/nsengaqueen/TheGym-GitExercises.git
   cbd6f0c..239ab08  master -> master
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git branch
  ft/new-branch-from-commit
* master
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git checkout  ft/new-branch-from-commit                                            
Switched to branch 'ft/new-branch-from-commit'
Your branch is up to date with 'GitAdvancedExercises/ft/new-branch-from-commit'.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git rebase master
Current branch ft/new-branch-from-commit is up to date.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git push
Everything up-to-date
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git branch -m ft/new-branch-from-commit ft/improved-branch-name 
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git log --oneline
239ab08 (HEAD -> ft/improved-branch-name, GitAdvancedExercises/master, GitAdvancedExercises/ft/new-branch-from-commit, master) adding new.txt in new branchfromcommit
cbd6f0c Merge branch 'ft/new-feature'
e42479a Updated project readme
6730ffa (GitAdvancedExercises/ft/new-feature) Implemented core functionality for new feature
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> 
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git checkout 239ab08
Note: switching to '239ab08'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 239ab08 adding new.txt in new branchfromcommit

## Git Advanced Exercises 2
1.Stashing Changes:



