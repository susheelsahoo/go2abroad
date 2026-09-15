import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CmsGuard } from "../auth/cms.guard";
import { CreateLeadDto, UpdateLeadDto } from "./leads.dto";
import { LeadsService } from "./leads.service";

@ApiTags("Leads")
@Controller("leads")
export class LeadsController {
  constructor(private readonly service: LeadsService) {}

  @Post()
  create(@Body() dto: CreateLeadDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(CmsGuard)
  list(@Query("status") status?: string) {
    return this.service.list(status);
  }

  @Patch(":id")
  @ApiBearerAuth()
  @UseGuards(CmsGuard)
  update(@Param("id") id: string, @Body() dto: UpdateLeadDto) {
    return this.service.update(id, dto);
  }
}
