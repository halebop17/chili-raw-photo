---
title: "Licences & credits"
description: "The third-party work Chili RAW is built on."
sidebar:
  order: 16
---

Chili RAW is not open source, but it stands on work that is. This page lists every third-party component the app ships, links or builds on, and the terms each is used under.

It is generated from the `NOTICE` file in the app's source tree — that file is the authoritative copy.

## ExifTool (Phil Harvey)

<https://exiftool.org/>

Bundled at Resources/ExifToolCommand/ and invoked as a subprocess.
Distributed under the same terms as Perl: GNU GPL v1+ or the Artistic
License (dual-license, user's choice). See:
  Resources/ExifToolCommand/exiftool (header)  
  https://exiftool.org/#license  

We invoke ExifTool as a separate process; we do not link against it.

## Perl (The Perl Foundation and contributors)

<https://www.perl.org/>

Bundled at Resources/perl/ as the interpreter that runs ExifTool, and
invoked as a subprocess. Built unmodified from the official source
release (perl-5.42.3, https://www.cpan.org/src/5.0/) by
perl-integration/build_perl.sh; only documentation, the XS build
headers and build/test toolchain modules are removed from the installed
tree. No source changes.

Dual-licensed, at the user's option, under the GNU General Public
License v1 or later, or the Artistic License. See:
  Resources/perl/Artistic  
  Resources/perl/Copying  
  https://dev.perl.org/licenses/  

We ship the interpreter and invoke it as a separate process; we do not
link against it. Previously we relied on the macOS system Perl, which
Apple has stated will be removed (issue #201).

## GeoTag (Marco S Hyman)

<https://github.com/marchyman/GeoTag>

Source of the bundled ExifTool distribution and reference for the
upcoming Swift wrapper (`Exiftool/`), `ImageData` / `Metadata` modules,
the map view, and `Place.swift` / `PlaceSaver.swift`. MIT licensed:

  Copyright 2014-2026 Marco S Hyman  

  Permission is hereby granted, free of charge, to any person obtaining  
  a copy of this software and associated documentation files (the  
  "Software"), to deal in the Software without restriction, including  
  without limitation the rights to use, copy, modify, merge, publish,  
  distribute, sublicense, and/or sell copies of the Software, and to  
  permit persons to whom the Software is furnished to do so, subject  
  to the following conditions:  

  The above copyright notice and this permission notice shall be  
  included in all copies or substantial portions of the Software.  

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,  
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF  
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND  
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS  
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN  
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN  
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
  SOFTWARE.  

## libjxl / jpegli (the JPEG XL Project Authors)

<https://github.com/libjxl/libjxl>

Bundled at Resources/bin/ (cjpegli, cjxl + dependency dylibs: libjxl,
libjxl_cms, libjxl_threads, libhwy, libbrotli*, liblcms2, libjpeg) and
invoked as subprocesses for JPEG (jpegli) and JPEG XL export. On this
export path we invoke the CLI tools as separate processes; we do not
link against these dylibs. (A second, separate copy of libjxl IS linked
statically, as part of the Adobe DNG SDK — see that entry below.)
BSD-3-Clause licensed — see Resources/bin/LICENSE-libjxl.
(Dependencies: highway — Apache-2.0/BSD; brotli, lcms2 — MIT;
libjpeg — IJG/BSD.)

Encoders built and bundled via the sibling jpegli-converter project.

## GeoNames (geonames.org)

<https://www.geonames.org/>

Bundled at Resources/Places/Gazetteer.sqlite — the `cities1000`,
`admin1CodesASCII` and `countryInfo` dumps, baked into one read-only
SQLite lookup table by tools/places/bake_places.py. Used for offline
reverse geocoding: a photo's GPS coordinates become a city / region /
country name with no network request. The data is unmodified; only its
container is ours.
Licensed CC BY 4.0 — https://creativecommons.org/licenses/by/4.0/

Also credited in the app: About Chili RAW ▸ Acknowledgements.

## spectral_film_lut (Jan Lohse)

<https://github.com/JanLohse/spectral_film_lut>

MIT licensed. Used offline to bake the film-emulation .cube LUTs shipped
in Resources/FilmLUTs/. Not bundled or linked.

## Lensfun lens-calibration database (the Lensfun project)

<https://github.com/lensfun/lensfun>

Bundled at Resources/LensProfiles/ as 56 XML data files, redistributed
VERBATIM and UNMODIFIED, and parsed at runtime for profile-based lens
correction (distortion, lateral chromatic aberration, vignetting).

The DATABASE is licensed under the Creative Commons Attribution-ShareAlike
3.0 Unported license (CC BY-SA 3.0). The full licence text ships alongside
the data at Resources/LensProfiles/COPYING.CC_BY-SA_3.0. See:
  https://creativecommons.org/licenses/by-sa/3.0/  

Note the upstream licence split: the Lensfun LIBRARY is LGPL-3.0 and the
Lensfun applications are GPL-3.0. We link NEITHER. We read the data files
only and implement the publicly documented correction models ourselves
(Sources/GeoTagCuller/Develop/LensCorrection.swift).

The database descends from Thomas Niemann's PTLens database, used with his
permission. The vignetting model is credited to Pablo d'Angelo and the
PanoTools team.

## LibRaw (LibRaw LLC, Alex Tutubalin)

<https://www.libraw.org/>

LibRaw 0.21.4, compiled from the unmodified upstream release tarball
(dng-integration/build_libraw.sh) into dng-integration/lib/libraw.a and
STATICALLY LINKED into the app. It is the decoder behind the "LibRaw"
option in Settings ▸ RAW Decoding, used for proprietary raw formats
(ARW, CR2, CR3, NEF, RAF …).

Built with no external image libraries: USE_JPEG, USE_JASPER, USE_LCMS
and USE_ZLIB are all left undefined, so LibRaw uses only its own
bundled decoders.

LibRaw is triple-licensed — LGPL-2.1, CDDL-1.0, or a commercial
licence from LibRaw LLC. We use it under the terms of the

  COMMON DEVELOPMENT AND DISTRIBUTION LICENSE (CDDL) Version 1.0  
  https://opensource.org/license/cddl-1-0  

CDDL-1.0 is a file-level copyleft: it permits linking LibRaw into a
larger proprietary work, and requires that the Covered Software — the
LibRaw source files themselves — remain available in source form under
the same licence. We distribute LibRaw UNMODIFIED, so the source form
of every covered file is the upstream release, available at:

  https://www.libraw.org/data/LibRaw-0.21.4.tar.gz  

Our own code is not a modification of LibRaw. LibRawBridge.mm calls the
public LibRaw API from outside the library; it is not a derivative of
any covered file.

## Adobe DNG SDK 1.7.1 (Adobe Inc.)

<https://helpx.adobe.com/camera-raw/digital-negative.html>

Compiled from the SDK source distribution (dng-integration/build_libs.sh)
and STATICALLY LINKED into the app as libdngsdk.a. It is the decoder
behind the "Adobe" option in Settings ▸ RAW Decoding, and it reads DNG
files — including linear DNGs and JPEG XL-compressed DNGs (DNG 1.7) —
as well as DCP camera profiles for colour rendering.

Used under the DNG SDK License Agreement, which grants a royalty-free
worldwide licence to use, reproduce, prepare derivative works from and
distribute the Software for any purpose. The full agreement ships with
the SDK as LICENSE.txt and is reproduced at the URL above.

Per §2 of that agreement, Adobe's copyright notices are retained in the
Software as we received it and are not removed from anything we
distribute in human-readable form.

Per §6, "Adobe" and the DNG logo are trademarks of Adobe Inc. We name
the SDK to describe what our decoder is built on. Nothing in Chili RAW
or its marketing is endorsed by, sponsored by or affiliated with Adobe,
and we do not use the DNG logo.

The SDK distribution carries four third-party components, which we
build and link along with it:

  Adobe XMP Toolkit (XMPCore, XMPFiles) — Adobe Inc., covered by the  
    same DNG SDK License Agreement above. Linked as  
    libXMPCoreStatic_Release.a and libXMPFilesStatic_Release.a.  

  libjxl — the JPEG XL Project Authors, BSD-3-Clause. Linked as  
    libjxl_release.a; this is what decodes JPEG XL-compressed DNGs.  
    Licence text: dng_sdk_1_7_1/libjxl/libjxl/LICENSE  

  libjpeg 9c — Independent JPEG Group. Linked as libjpeg.a, built from  
    the SDK's bundled copy. Used under the IJG licence:  
    http://www.ijg.org/  

  expat (MIT) and zlib (zlib licence) — required by the XMP Toolkit and  
    linked from the system (-lexpat, -lz).
