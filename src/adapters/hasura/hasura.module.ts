import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AttendanceHasuraService } from "./attendance.adapter";
import { HasuraCommentService } from "./comment.adapter";
import { HasuraConfigService } from "./config.adapter";
import { HasuraGroupService } from "./group.adapter";
import { HasuraHolidayService } from "./holiday.adapter";
import { HasuraLikeService } from "./like.adapter";
import { SchoolHasuraService } from "./school.adapter";

@Module({
  imports: [HttpModule],
  providers: [
    AttendanceHasuraService,
    SchoolHasuraService,
    HasuraGroupService,
    HasuraCommentService,
    HasuraConfigService,
    HasuraLikeService,
    HasuraHolidayService,
  ],
  exports: [
    AttendanceHasuraService,
    SchoolHasuraService,
    HasuraGroupService,
    HasuraCommentService,
    HasuraConfigService,
    HasuraLikeService,
    HasuraHolidayService,
  ],
})
export class HasuraModule {}
