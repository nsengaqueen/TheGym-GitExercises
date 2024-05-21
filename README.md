## Git Advanced Exercises 1

1. Missing File Fix:
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git status
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        test4.md

nothing added to commit but untracked files present (use "git add" to track)

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git log
commit 8fae7631f217911a02944d0c779ad4ac70733c2a (HEAD -> main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:58 2024 +0200

    chore: Create third and fourth files

commit b291a72408e1930e43124c031c5e25e0b9338e0d
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: Create another file

commit 1438792869560a2da326bacbdab0e933984f2789
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: Create initial file

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git add test4.md

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git commit --amend --no-edit
[main de09fdb] chore: Create third and fourth files
 Date: Tue May 21 12:25:58 2024 +0200
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test3.md
 create mode 100644 test4.md

 2.Editing Commit History:
 PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git rebase -i HEAD~2
[detached HEAD 971a241] chore: Create second file
 Date: Tue May 21 12:25:57 2024 +0200
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test2.md
Successfully rebased and updated refs/heads/main.

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git log
commit 285f7adc918b6746722302de4f21b30782cc1019 (HEAD -> main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:58 2024 +0200

    chore: Create third and fourth files

commit 971a2418f40b6666e004a32d0271f1654a119262
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: Create second file

commit 1438792869560a2da326bacbdab0e933984f2789
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: Create initial file

 3.Keeping History Tidy - Squashing Commits:
 PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git log
commit 285f7adc918b6746722302de4f21b30782cc1019 (HEAD -> main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:58 2024 +0200

    chore: Create third and fourth files

commit 971a2418f40b6666e004a32d0271f1654a119262
Author: nsengaqueen <nsengaqueen123@gmail.com
Date:   Tue May 21 12:25:57 2024 +0200

    chore: Create second file

commit 1438792869560a2da326bacbdab0e933984f2789
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: Create initial file

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git rebase -i --root
[detached HEAD 8248c41] chore: create the first two files
 Date: Tue May 21 12:25:57 2024 +0200
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test1.md
 create mode 100644 test2.md
Successfully rebased and updated refs/heads/main.

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git log
commit 443af88ee6445dfbdea1c18c748ef9649c699931 (HEAD -> main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:58 2024 +0200

    chore: Create third and fourth files

commit 8248c4197a22a90026987236bbd3c6a7cd55a5f4
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: create the first two files

    chore: Create initial file

    chore: Create second file

 4.Splitting a Commit:
 PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git log
commit 443af88ee6445dfbdea1c18c748ef9649c699931 (HEAD -> main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:58 2024 +0200

    chore: Create third and fourth files

commit 8248c4197a22a90026987236bbd3c6a7cd55a5f4
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: create the first two files

    chore: Create initial file

    chore: Create second file

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git rebase -i Head~1
Stopped at 443af88...  chore: Create third and fourth files
You can amend the commit now, with

  git commit --amend

Once you are satisfied with your changes, run

  git rebase --continue

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main|REBASE 1/1)
$ git status
interactive rebase in progress; onto 8248c41
Last command done (1 command done):
   edit 443af88 chore: Create third and fourth files
No commands remaining.
You are currently editing a commit while rebasing branch 'main' on '8248c41'.
  (use "git commit --amend" to amend the current commit)
  (use "git rebase --continue" once you are satisfied with your changes)

nothing to commit, working tree clean

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main|REBASE 1/1)
$ git reset HEAD~

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main|REBASE 1/1)
$ git status
interactive rebase in progress; onto 8248c41
Last command done (1 command done):
   edit 443af88 chore: Create third and fourth files
No commands remaining.
You are currently editing a commit while rebasing branch 'main' on '8248c41'.
  (use "git commit --amend" to amend the current commit)
  (use "git rebase --continue" once you are satisfied with your changes)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        test3.md
        test4.md

nothing added to commit but untracked files present (use "git add" to track)

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main|REBASE 1/1)
$ git add test3.md

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main|REBASE 1/1)
$ git commit -m"create third file"
[detached HEAD 5b3e6ea] create third file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test3.md

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main|REBASE 1/1)
$ git add test4.md

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main|REBASE 1/1)
$ git commit -m"create fourth file"
[detached HEAD 70851ec] create fourth file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test4.md

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main|REBASE 1/1)
$ git rebase --continue
Successfully rebased and updated refs/heads/main.

5.Advanced Squashing:
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git log
commit 70851ec1815948b8cbb01802a262de7556d0126d (HEAD -> main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 13:49:50 2024 +0200

    create fourth file

commit 5b3e6ea4a031d2e8907ad24d1c57120641fa0c20
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 13:49:08 2024 +0200

    create third file

commit 8248c4197a22a90026987236bbd3c6a7cd55a5f4
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: create the first two files

    chore: Create initial file

    chore: Create second file

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git rebase -i Head~2
[detached HEAD 0a42925] create third and fourth files
 Date: Tue May 21 13:49:08 2024 +0200
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test3.md
 create mode 100644 test4.md
Successfully rebased and updated refs/heads/main.

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git log
commit 0a4292517dc5890e0f987be44bfb5303ef1af7a5 (HEAD -> main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 13:49:08 2024 +0200

    create third and fourth files

    create fourth file

commit 8248c4197a22a90026987236bbd3c6a7cd55a5f4
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: create the first two files

    chore: Create initial file

    chore: Create second file
6.Dropping a Commit:

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git log
commit 945d29e56f70f52cd5405ebccc043974c803c512 (HEAD -> main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 14:19:33 2024 +0200
pick 0a42925 create third and fourth files

    Unwanted commit

commit 0a4292517dc5890e0f987be44bfb5303ef1af7a5
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 13:49:08 2024 +0200

    create third and fourth files

    create fourth file

commit 8248c4197a22a90026987236bbd3c6a7cd55a5f4
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: create the first two files

    chore: Create initial file

    chore: Create second file

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git rebase -i Head~2
Successfully rebased and updated refs/heads/main.

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git log
commit 0a4292517dc5890e0f987be44bfb5303ef1af7a5 (HEAD -> main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 13:49:08 2024 +0200

    create third and fourth files

    create fourth file

commit 8248c4197a22a90026987236bbd3c6a7cd55a5f4
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: create the first two files

    chore: Create initial file

    chore: Create second file

7.Reordering Commits:
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git rebase -i --root
Successfully rebased and updated refs/heads/main.

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git log
commit 077b3f71f611969c6f3d8ab2e0094e12ca73c0be (HEAD -> main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: create the first two files

    chore: Create initial file

    chore: Create second file

commit c305411b3a13778fb255b5b5f1f59002c7cca303
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 13:49:08 2024 +0200

    create third and fourth files

    create fourth file

8.Cherry-Picking Commits:
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git checkout -b ft/branch
Switched to a new branch 'ft/branch'

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (ft/branch)
$ git add .

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (ft/branch)
$  git commit -m"Implemented test 5"
[ft/branch 6c1ac40] Implemented test 5
 1 file changed, 1 insertion(+)
 create mode 100644 test5.md

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (ft/branch)
$ git log
commit 6c1ac400dce5dd24ae1bbc8fba2eb408b1ba6630 (HEAD -> ft/branch)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 14:50:39 2024 +0200

    Implemented test 5

commit 077b3f71f611969c6f3d8ab2e0094e12ca73c0be (main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: create the first two files

    chore: Create initial file

:...skipping...
commit 6c1ac400dce5dd24ae1bbc8fba2eb408b1ba6630 (HEAD -> ft/branch)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 14:50:39 2024 +0200

    Implemented test 5

commit 077b3f71f611969c6f3d8ab2e0094e12ca73c0be (main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: create the first two files

    chore: Create initial file

    chore: Create second file

commit c305411b3a13778fb255b5b5f1f59002c7cca303
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 13:49:08 2024 +0200

    create third and fourth files

    create fourth file
~
~
~
~
~
~
~
~
~

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (ft/branch)
$ git checkout main
Switched to branch 'main'

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git cherry-pick 6c1ac400dce5dd24ae1bbc8fba2eb408b1ba6630
[main ff82239] Implemented test 5
 Date: Tue May 21 14:50:39 2024 +0200
 1 file changed, 1 insertion(+)
 create mode 100644 test5.md

PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git log
commit ff82239d7eb3bc4cb31c596567d84fce4031b4e0 (HEAD -> main)
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 14:50:39 2024 +0200

    Implemented test 5

commit 077b3f71f611969c6f3d8ab2e0094e12ca73c0be
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 12:25:57 2024 +0200

    chore: create the first two files

    chore: Create initial file

    chore: Create second file

commit c305411b3a13778fb255b5b5f1f59002c7cca303
Author: nsengaqueen <nsengaqueen123@gmail.com>
Date:   Tue May 21 13:49:08 2024 +0200

    create third and fourth files

    create fourth file
9.Visualizing Commit History (Bonus):
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> (main)
$ git log --graph
* commit ff82239d7eb3bc4cb31c596567d84fce4031b4e0 (HEAD -> main)
| Author: nsengaqueen <nsengaqueen123@gmail.com>
| Date:   Tue May 21 14:50:39 2024 +0200
| 
|     Implemented test 5
| 
* commit 077b3f71f611969c6f3d8ab2e0094e12ca73c0be
| Author: nsengaqueen <nsengaqueen123@gmail.com>
| Date:   Tue May 21 12:25:57 2024 +0200
| 
|     chore: create the first two files
|     
|     chore: Create initial file
|     
|     chore: Create second file
| 
* commit c305411b3a13778fb255b5b5f1f59002c7cca303
  Author: nsengaqueen <nsengaqueen123@gmail.com>
  Date:   Tue May 21 13:49:08 2024 +0200
  
      create third and fourth files
      
      create fourth file




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

## Git Advanced Exercises 3
1.Stashing Changes:
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git stash save "some stashed data in main"
Saved working directory and index state On master: some stashed data in main

2.Retrieving Stashed Changes:
 git stash pop         
On branch master
Your branch is up to date with 'GitAdvancedExercises/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)    
        modified:   README.md
        modified:   new.txt

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (26ecad9f277e8a7d91814edc8f2a9dbebbd8d33a)
3.Branch Merging Conflicts (Continued)
git add .
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git commit -m "adding conflicting changes"
[feature-branch a7441ec] adding conflicting changes
 2 files changed, 2 insertions(+), 1 deletion(-)
 create mode 100644 file.md
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git checkout master
Switched to branch 'master'
Your branch is up to date with 'GitAdvancedExercises/master'.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git add file.md
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git commit -m "adding conflicts to main"
[master 88b48c5] adding conflicts to main
 1 file changed, 1 insertion(+)
 create mode 100644 file.md
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git merge feature-branch
Auto-merging file.md
CONFLICT (add/add): Merge conflict in file.md
Automatic merge failed; fix conflicts and then commit the result.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 308 bytes | 308.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/nsengaqueen/TheGym-GitExercises.git
   e3b95a2..88b48c5  master -> master

 
 4.Resolving Merge Conflicts with a Merge Tool:
 git config --global merge.tool vimdiff
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git mergetool
Merging:
file.md

Normal merge conflict for 'file.md':
  {local}: created file
  {remote}: created file
3 files to edit

7.
git checkout master 
Already on 'master'
M       file.md
M       new.txt
Your branch is up to date with 'GitAdvancedExercises/master'.
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git tag v1.0
8.Working with Tags:
git tag
v1.0
PS C:\Users\user\Desktop\THE GYM\TheGymGitexercises> git tag -d v1.0      
Deleted tag 'v1.0' (was 88b48c5)
9.Pushing Local Work to Remote Repositories
   git push
Everything up-to-date
10.Pulling Changes from Remote Repositories:
  
  







