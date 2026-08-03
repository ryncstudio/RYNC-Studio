Add-Type -AssemblyName System.Drawing
$files = @('team-ralph-new.jpg','team-cindy-new.jpg','team-kathleen-new.jpg','team-ramsleigh-new.jpg','team-meeiu.png')
foreach ($f in $files) {
    $path = "c:\Users\dains\Desktop\RYNC-Studio-main\src\assets\$f"
    $img = [System.Drawing.Image]::FromFile($path)
    Write-Output "$f -> $($img.Width) x $($img.Height)"
    $img.Dispose()
}
