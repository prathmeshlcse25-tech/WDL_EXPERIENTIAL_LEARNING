cd "c:\Users\ADMIN\MyProject"
for ($i = 2; $i -le 15; $i++) {
    $content = Get-Content WDL_EXPERIENTIAL_LEARNING.html
    $content[-2] = "<!-- Commit $i -->"
    $content | Set-Content WDL_EXPERIENTIAL_LEARNING.html
    git add .
    git commit -m "Commit $i"
}