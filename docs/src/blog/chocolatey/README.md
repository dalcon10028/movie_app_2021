# Chocolatey를 이용한 실습 인스톨러

![Chocolatey](https://community.chocolatey.org/content/images/global-shared/facebook-share.png)

## 다운로드

::: tip
PowerShell을 관리자 권한으로 실행하셔서 파일위치로 이동하신 후 실행하시면 됩니다. <br />
`./web-contents-programming-installer.bat`
:::

## [다운로드](https://comgom.s3.ap-northeast-2.amazonaws.com/web-contents-programming-installer.bat)

### 설치목록

- [Chocolatey](https://chocolatey.org/)
- [Node.js LTS (14.17.6)](https://community.chocolatey.org/packages/nodejs-lts)
- [Git](https://community.chocolatey.org/packages/git)
- [Visual Studio Code](https://community.chocolatey.org/packages/vscode)
- [Google Chrome](https://community.chocolatey.org/packages/GoogleChrome)

## Chocolatey

[2021년 9월 1일](/review-note/2021-09-01/)에 들은 수업중에 교수님께서 윈도우를 위한 패키지 매니저인
[Chocolatey](https://chocolatey.org/)를 소개해주셨습니다. 패키지 매니저란 운영 체제 안에서 소프트웨어의 설치, 업그레이드, 구성, 제거
과정을 자동화해주는 소프트웨어 도구들의 모음입니다.

Ubuntu에서는 [apt](https://wiki.debian.org/ko/Apt)를 사용하고 macOS에서는 [Homebrew](https://brew.sh/index_ko)를 사용한다는 걸 알고있었지만 윈도우에도
이런 패키지 매니저가 있다는 건 생각을 하지도 않았어서 놀랐습니다.

현재 코로나로 인해 2주차까지는 전부 비대면 수업으로 진행되고 3주차부터 대면을 선택할 수 있기 때문에, 학교에 방문해 실습 환경을 새로 구성해야합니다.

그래서 귀찮은 실습환경 세팅을 [Chocolatey](https://chocolatey.org/) 바탕으로 자동설치 배치파일을 작성해보았습니다.

## 소스코드

```PowerShell
echo OFF
echo ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
echo ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
echo :::::::::::::::::::Web Contents Programming Installer:::::::::::::::::::::::::::::::::::::::::::::::
echo ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
echo ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
echo :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::201730219 yeonkwon:::::::::
echo ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

choco -y upgrade chocolatey

echo ::::::::::::::::::::::::::::::::::::::::::::::::::
echo ::
echo :: Install Node.js LTS (14.17.6)
echo ::
echo ::::::::::::::::::::::::::::::::::::::::::::::::::

choco install -y nodejs-lts

echo ::::::::::::::::::::::::::::::::::::::::::::::::::
echo ::
echo :: Install Git
echo ::
echo ::::::::::::::::::::::::::::::::::::::::::::::::::

choco install -y git

echo ::::::::::::::::::::::::::::::::::::::::::::::::::
echo ::
echo :: Install Visual Studio Code
echo ::
echo ::::::::::::::::::::::::::::::::::::::::::::::::::

choco install -y vscode

echo ::::::::::::::::::::::::::::::::::::::::::::::::::
echo ::
echo :: Install Google Chrome
echo ::
echo ::::::::::::::::::::::::::::::::::::::::::::::::::

choco install -y googlechrome
```

### 참고

- [INSTALLING CHOCOLATEY](https://chocolatey.org/install)
- [[Windows] 윈도우 패키지 관리자 choco 사용하기](https://blog.itpaper.co.kr/win-choco/)
